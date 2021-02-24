import React from "react";
import AudioSettingBlock from "./audio-setting.js";

const AudioSettingsBlock = () => {
  return(
    <div className='settings-block'>
      <AudioSettingBlock name={'Music: 100%'} />
      <AudioSettingBlock name={'Soundqq: 100%'} />
    </div>
  );
};

export default AudioSettingsBlock;