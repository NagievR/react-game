import React, { useState } from "react";
import AsideOption from "./aside-option.js";
import * as consts from "../../logic/consts.js";
import useDefineAction from "../../logic/define-action.js";

// icons
import setFullscreen from "../../assets/icons/fullscreen-open.svg";
import cancelFullscreen from "../../assets/icons/fullscreen-close.svg";
import settings from "../../assets/icons/settings.svg";
import keyboard from "../../assets/icons/keyboard.svg";
import podium from "../../assets/icons/podium.svg";

const Aside = () => {

  const [fullscreenIcon, setFullscreenIcon] = useState(setFullscreen); 

  const { defineAction } = useDefineAction();

  const openSection = action => {
    defineAction(action);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      setFullscreenIcon(setFullscreen);
      document.webkitCancelFullScreen();
    } else {
      setFullscreenIcon(cancelFullscreen);
      document.documentElement.webkitRequestFullscreen();
    }
  };

  return(
    <div className='aside'>
      <AsideOption
        iconSrc={fullscreenIcon}
        fullscreen={toggleFullscreen}
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
        openSection={() => openSection(consts.statistic)}
        iconSrc={podium}
      />
    </div>
  );
};

export default Aside;