import { useEffect, useState } from "react";
import hanger from "./assets/legs-img.png";
import Controls from "./components/Controls";
import { Keyboard } from "./components/Keyboard";
import wordsList from "./data/wordsList.json";
function App() {
  const [word, setWord] = useState(
    wordsList[Math.floor(Math.random() * wordsList.length)]
  );
  const [win, setWin] = useState(false);
  const [guessedWord, setGuessedWord] = useState("");
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  const checkGuess = (letter: string) => {
    setSelectedLetters([...selectedLetters, letter]);
    if (word.includes(letter)) {
      setGuessedWord(guessedWord + letter);
    } else {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  useEffect(() => {
    if (guessedWord.length === word.length) {
      setWin(true);
    }
  }, [guessedWord, word]);

  return (
    <>
      <div className="h-screen flex w-full justify-center">
        <div className="flex flex-col mt-16 w-9/12">
          <h1 className="self-center text-4xl pb-2 font-bold font-mono">
            Hangman
          </h1>
          <h1 className="self-center pb-16 text-2xl font-thin font-mono">
            you have to figure out the word
          </h1>
          <div className="flex flex-col justify-center lg:grid lg:grid-cols-2">
            <img className="object-contain w-64 self-center lg:self-auto" src={hanger} alt="hangman" />
            {win ? (
              <div className="mt-24 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold font-mono">You Won :)</h1>
                <button
                  className="bg-gray-400 text-2xl font-bold font-mono rounded-lg px-4 py-2 mt-8"
                  onClick={() => window.location.reload()}
                >
                  Play Again
                </button>
              </div>
            ) : (
              <div>
                {wrongGuesses < 4 ? (
                  <>
                    <Controls word={word} guessedWord={guessedWord} />
                    <Keyboard
                      word={word}
                      checkGuess={checkGuess}
                      selectedLetters={selectedLetters}
                    />
                  </>
                ) : (
                  <div className="mt-24 flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold font-mono">You Lose</h1>
                    <button
                      className="bg-gray-400 text-2xl font-bold font-mono rounded-lg px-4 py-2 mt-8"
                      onClick={() => window.location.reload()}
                    >
                      Play Again
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
