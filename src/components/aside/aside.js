import React from "react";
import AsideOption from "./aside-option.js";

import iconSetFullscreen from "../../icons/fullscreen-open.svg";
import settings from "../../icons/settings.svg";
import keyboard from "../../icons/keyboard.svg";
import podium from "../../icons/podium.svg";


const Aside = () => {
  return(
    <div className='aside'>
      <AsideOption iconSrc={iconSetFullscreen} />
      <AsideOption iconSrc={settings} />
      <AsideOption iconSrc={keyboard} />
      <AsideOption iconSrc={podium} />
    </div>
  );
};

export default Aside;