const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  checkGuess(letter: string): void;
  word: string;
  selectedLetters: string[];
};

const Keyboard = ({ word, checkGuess, selectedLetters }: KeyboardProps) => {
  return (
    <div className="grid grid-cols-7 gap-2 md:gap-4 my-8 md:mt-16">
      {letters.map((key) => {
        const selected: boolean = selectedLetters.includes(key);
        const correct: boolean = word.includes(key);
        return (
          <button
            className={`border-black text-center aspect-square text-2xl uppercase border-2 rounded-lg ${
              !correct && selected
                ? "bg-red-400"
                : correct && selected
                ? "bg-green-400"
                : ""
            }`}
            key={key}
            onClick={() => checkGuess(key)}
            disabled={selected}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
