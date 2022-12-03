import React from "react";

type wordProps = {
  word: string;
  guessedWord: string;
};

const Word = ({ word, guessedWord }: wordProps) => {
  return (
    <div className="flex flex-row mt-14 lg:mt-0 justify-center items-center">
      {word.split("").map((letter, index) => (
        <div
          key={index}
          className="flex flex-col pr-0 md:pr-4 text-3xl md:text-5xl justify-center items-center"
        >
          {guessedWord.includes(letter) ? (
            <div className="w-14 md:w-16 h-16 flex justify-center items-center uppercase">
              {letter}
            </div>
          ) : (
            <div className="w-14 md:w-16 h-16 flex justify-center items-center">
              __
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Word;
