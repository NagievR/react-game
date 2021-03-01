import React from "react";

import ModalWrap from "../modal-wrap";
import AudioSettingsBlock from "./audio-settings/audio-settings-block";
import NumbersRangeBlock from "./numbers-range/numbers-range-block";
import OperatorsChoose from "./operators-choose";
import ExpressionLength from "./expression-length";

const Settings = () => {
  return(
    <ModalWrap>
      <AudioSettingsBlock />
      <ExpressionLength />
      <NumbersRangeBlock />
      <OperatorsChoose />
    </ModalWrap>
  );
};

export default Settings;