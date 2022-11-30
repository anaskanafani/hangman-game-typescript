import React from "react";

type wordProps = {
  word: string;
  guessedWord: string;
};

const Controls = ({ word, guessedWord }: wordProps) => {
  return (
    <div className="flex flex-row mt-14 lg:mt-0">
      {word.split("").map((letter, index) => (
        <div
          key={index}
          className="flex flex-col pr-4 text-5xl justify-center items-center"
        >
          {guessedWord.includes(letter) ? (
            <div className="w-16 h-16 flex justify-center items-center">
              {letter}
            </div>
          ) : (
            <div className="w-16 h-16 flex justify-center items-center">
              __
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Controls;
