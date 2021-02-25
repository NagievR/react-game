import React from "react";
import AsideOption from "./aside-option.js";
import * as consts from "../../logic/consts.js";
import useDefineAction from "../../logic/define-action.js";

// icons
import setFullscreen from "../../icons/fullscreen-open.svg";
import settings from "../../icons/settings.svg";
import keyboard from "../../icons/keyboard.svg";
import podium from "../../icons/podium.svg";

const Aside = () => {

  const { defineAction } = useDefineAction();

  const openSection = action => {
    defineAction(action);
  };

  return(
    <div className='aside'>
      <AsideOption
        iconSrc={setFullscreen}
      />
      <AsideOption
        openSection={() => openSection(consts.settings)}
        iconSrc={settings}
      />
      <AsideOption
        openSection={() => openSection(consts.keyboardInfo)}
        iconSrc={keyboard}
      />
      <AsideOption
        iconSrc={podium}
      />
    </div>
  );
};

export default Aside;