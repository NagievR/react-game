import React from "react";

import ExpressionBox from "./expression-box.js";
import Timer from "./timer.js";
import Variants from "./variants/variants.js";
import StartGame from "./start-game.js";
import Settings from "./settings/settings.js";

const Main = () => {
  const gameField = (
    <>
      <ExpressionBox />
      <Timer />
      <Variants />
    </>
  );

  const startGame = (
    <StartGame />
  );

  const settings = (
    <Settings />
  );

  return(
    <main className='main'>
      {

      settings
      }
    </main>
  );
};

export default Main;