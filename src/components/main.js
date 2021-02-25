import React from "react";

import ExpressionBox from "./game-field/expression-box.js";
import Timer from "./game-field/timer.js";
import Variants from "./game-field/variants/variants.js";
import StartGameButton from "./start-game-button.js";
import Settings from "./settings/settings.js";
import KeyboardInfo from "./keyboard-info.js";

const Main = () => {

// eslint-disable-next-line
  const gameField = (
    <>
      <ExpressionBox />
      <Timer />
      <Variants />
    </>
  );

// eslint-disable-next-line
  const startGame = (
    // Must be at the end of conditional rendering
    <StartGameButton />
  );

// eslint-disable-next-line
  const settings = (
    <Settings />
  );

  // eslint-disable-next-line
  const keyboardInfo = (
    <KeyboardInfo />
  );

  return(
    <main className='main'>
      {
        keyboardInfo
      }
    </main>
  );
};

export default Main;