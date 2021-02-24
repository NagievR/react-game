import React from "react";
  
const AudioSetting = ({ name }) => {
  return(
    <div className='multiply-setting-wrap'>
      <div>
        <span>{name}</span>
        <br />
        <input 
          className='slider'
          type='range'
          min='0' 
          max='6'
        />
      </div>
    </div>
  );
};

export default AudioSetting;