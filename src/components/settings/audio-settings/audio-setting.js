import React from "react";
import PropTypes from "prop-types";
  
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

AudioSetting.propTypes = {
  name: PropTypes.string,
};

export default AudioSetting;