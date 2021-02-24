import React from "react";

import ModalWrap from "../modal-wrap";
import AudioSettingsBlock from "./audio-settings-block";
import ThemeChoose from "./theme-choose";


const Settings = () => {
  return(
    <ModalWrap>
      <AudioSettingsBlock />
      <ThemeChoose />
    </ModalWrap>
  );
};

export default Settings;