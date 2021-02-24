import React from "react";

import ModalWrap from "../modal-wrap";
import AudioSettingsBlock from "./audio-settings/audio-settings-block";
import NumbersRangeBlock from "./numbers-range/numbers-range-block";
import OperatorsChoose from "./operators-choose";
import ThemeChoose from "./theme-choose";

const Settings = () => {
  return(
    <ModalWrap>
      <AudioSettingsBlock />
      <ThemeChoose />
      <NumbersRangeBlock />
      <OperatorsChoose />
    </ModalWrap>
  );
};

export default Settings;