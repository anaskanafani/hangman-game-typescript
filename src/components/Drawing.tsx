import { useEffect, useState } from "react";
import hanger from "../assets/hanger-img.png";
import head from "../assets/head-img.png";
import body from "../assets/body-img.png";
import rightArm from "../assets/hands-img-1.png";
import hands from "../assets/hands-img-2.png";
import rightLeg from "../assets/legs-img-1.png";
import legs from "../assets/legs-img-2.png";

type drawingProps = {
  wrongGuesses: number;
};
const Drawing = ({ wrongGuesses }: drawingProps) => {
  const [img, setImg] = useState(hanger);
  useEffect(() => {
    switch (wrongGuesses) {
      case 1:
        setImg(head);
        break;
      case 2:
        setImg(body);
        break;
      case 3:
        setImg(rightArm);
        break;
      case 4:
        setImg(hands);
        break;
      case 5:
        setImg(rightLeg);
        break;
      case 6:
        setImg(legs);
        break;
      default:
        break;
    }
  }, [wrongGuesses]);

  return (
      <img
        className="object-contain w-36 md:w-64 self-center lg:self-auto"
        src={img}
        alt="hangman"
      />
  );
};

export default Drawing;
