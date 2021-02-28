import React from "react";
import PropTypes from "prop-types";

const AudioSetting = ({ name, handleChange, id, volume }) => {
  return(
    <div className='multiply-setting-wrap'>
      <div>
        <span>{name}</span>
        <br />
        <input 
          id={id}
          onChange={handleChange}
          className='slider'
          type='range'
          min='0' 
          max='10'
          value={volume}
        />
      </div>
    </div>
  );
};

AudioSetting.propTypes = {
  name: PropTypes.string,
  handleChange: PropTypes.func,
  id: PropTypes.string,
  volume: PropTypes.number,
};

export default AudioSetting;