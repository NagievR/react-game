import React from "react";
import useDefineAction from "../logic/define-action.js"
import { gameField, newMathContainer } from "../logic/consts.js";

const StartGameButton = () => {
  
  const { defineAction } = useDefineAction();

  const handleClick = () => {
    defineAction(newMathContainer);
    defineAction(gameField);
  };

  return(
    <div className='start-btn-wrap'>
      <div onClick={handleClick} className='start-btn scale-anim'>
        start game
      </div>
    </div>
  );
};

export default StartGameButton;