import React from "react";

import ModalWrap from "../modal-wrap";
import AudioSettingsBlock from "./audio-settings/audio-settings-block";
import NumbersRangeBlock from "./numbers-range/numbers-range-block";
import ChooseOperator from "./choose-operator";
import ExpressionLength from "./expression-length";

const Settings = () => {
  return(
    <ModalWrap>
      <AudioSettingsBlock />
      <ExpressionLength />
      <NumbersRangeBlock />
      <ChooseOperator />
    </ModalWrap>
  );
};

export default Settings;