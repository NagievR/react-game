import React from "react";
import useStore from "../logic/store.js";

import ExpressionBox from "./game-field/expression-box.js";
import GameStatus from "./game-field/game-status.js";
import Variants from "./game-field/variants/variants.js";
import StartGameButton from "./start-game-button.js";
import Settings from "./settings/settings.js";
import KeyboardInfo from "./keyboard-info.js";
import GameOver from "./game-over.js";

const Main = () => {

  const { sectionToShow } = useStore();

  const gameField = (
    <>
      <ExpressionBox />
      <GameStatus />
      <Variants />
    </>
  );
  const settings = <Settings />;
  const keyboardInfo = <KeyboardInfo />;
  const gameOver = <GameOver />
  const startGame = <StartGameButton />;

  return(
    <main className='main'>
      {
        (sectionToShow.gameField && gameField)
        || (sectionToShow.settings && settings)
        || (sectionToShow.keyboardInfo && keyboardInfo)
        || (sectionToShow.gameOver && gameOver)
        || startGame
      }
    </main>
  );
};

export default Main;