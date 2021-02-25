import React from "react";
import useStore from "../logic/store.js";

import ExpressionBox from "./game-field/expression-box.js";
import Timer from "./game-field/timer.js";
import Variants from "./game-field/variants/variants.js";
import StartGameButton from "./start-game-button.js";
import Settings from "./settings/settings.js";
import KeyboardInfo from "./keyboard-info.js";

const Main = () => {

  const { sectionToShow } = useStore();

  const gameField = (
    <>
      <ExpressionBox />
      <Timer />
      <Variants />
    </>
  );

  const startGame = (
    <StartGameButton />
  );

  const settings = (
    <Settings />
  );

  const keyboardInfo = (
    <KeyboardInfo />
  );

  return(
    <main className='main'>
      {
        (sectionToShow.gameField && gameField)
        || (sectionToShow.settings && settings)
        || (sectionToShow.keyboardInfo && keyboardInfo)
        || startGame
      }
    </main>
  );
};

export default Main;