import React from "react";
import heart from "../../assets/icons/heart.svg";

const Timer = () => {
  const left = '28';

  return(
    <div className='game-status-wrap'>
      <div className='score'>
        2280
        <span className='unit'>pts</span>
      </div>

      <div className='hearts-box'>
        <img className='heart' src={heart} />
        <img className='heart' src={heart} />
        <img className='heart' src={heart} />
      </div>

      <div className='timer'>
        {left}<span className='unit'>sec</span>
      </div>
    </div>
  );
};

export default Timer;