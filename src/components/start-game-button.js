import React from "react";
import useDefineAction from "../logic/define-action.js"
import { gameField } from "../logic/consts.js";

const StartGameButton = () => {
  
  const { defineAction } = useDefineAction();

  const handleClick = () => {
    defineAction(gameField);
  };

  return(
    <div onClick={handleClick} className='start-btn-wrap'>
      <div className='start-btn scale-anim'>
        start game
      </div>
    </div>
  );
};

export default StartGameButton;