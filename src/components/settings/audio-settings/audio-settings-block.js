import React from "react";
import useStore from "../../../logic/store.js";
import AudioSettingBlock from "./audio-setting.js";
import { audioVolume } from "../../../logic/consts.js";
import useDefineAction from "../../../logic/define-action.js";

const defineVisualVolume = (source) => (
  source === 0 ? 'off' : source * 100 + '%'
);

const AudioSettingsBlock = () => {

  const { audioSettings } = useStore();
  const { defineAction } = useDefineAction();

  const handleChange = event => {
    const targ = event.target;
    defineAction(audioVolume, [targ.id, targ.value]);
  };

  const musicVolumeVisual = defineVisualVolume(audioSettings.musicVolume);
  const soundVolumeVisual = defineVisualVolume(audioSettings.soundVolume);

  return(
    <div className='settings-block'>
      <AudioSettingBlock 
        handleChange={handleChange} 
        name={`Music: ${musicVolumeVisual}`}
        id={'musicVolume'}
        volume={audioSettings.musicVolume * 10}
      />
      <AudioSettingBlock 
        handleChange={handleChange} 
        name={`Sound: ${soundVolumeVisual}`}
        id={'soundVolume'}
        volume={audioSettings.soundVolume * 10}
      />
    </div>
  );
};

export default AudioSettingsBlock;