import React, { useEffect } from "react";
import heart from "../../assets/icons/heart.svg";
import { updateTimer, gameOver } from "../../logic/consts";
import useDefineAction from "../../logic/define-action";
import useStore from "../../logic/store";

const GameStatus = () => {

  const { gameProgress } = useStore();
  const { defineAction } = useDefineAction();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!gameProgress.triesLeft && !gameProgress.timeLeft) {
        defineAction(gameOver);
      } else {
        defineAction(updateTimer);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  });

  useEffect(() => {
    if (!gameProgress.triesLeft) {
      setTimeout(defineAction, 800, gameOver);
    }
  }, [gameProgress.triesLeft]);

  const showTriesLeft = tries => {
    const triesLeft = [];
    for (let i = 0; i < tries; i++) {
      triesLeft.push(
        <img className='heart' alt='heart' src={heart} key={i} />
      );
    }
    return triesLeft;
  };

  return(
    <div className='game-status-wrap'>

      <div className='score'>
        {gameProgress.score}
        <span className='unit'>pts</span>
      </div>

      <div className='hearts-box'>
        {showTriesLeft(gameProgress.triesLeft)}
      </div>

      <div className={gameProgress.timeLeft < 6 ? 'timer hurry' : 'timer'}>
        {gameProgress.timeLeft}
        <span className='unit'>sec</span>
      </div>

    </div>
  );
};

export default GameStatus;