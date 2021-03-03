import React from "react";
import ModalWrap from "./modal-wrap";
import StatisticToWrap from "./statistic/statistic-to-wrap";

const GameOver = () => {
  return(
    <ModalWrap>
      <div className='game-over'>
        <h3>game over</h3>
        <StatisticToWrap />
      </div>
    </ModalWrap>
  );
};

export default GameOver;