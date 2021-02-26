import React from "react";
import PropTypes from 'prop-types';

const AsideOption = ({ iconSrc, openSection, fullscreen }) => {

  const handleClick = () => {
    if (openSection) {
      openSection();
    } else if (fullscreen) {
      fullscreen();
    } else {
      console.log('unknown');
    }
  };

  return(
    <div onClick={handleClick} className='aside-option-wrap'>
      <img 
        className='aside-option scale-anim' 
        src={iconSrc} 
        alt='icon' 
      />
    </div>
  );
};

AsideOption.propTypes = {
  iconSrc: PropTypes.string,
  openSection: PropTypes.func,
  fullscreen: PropTypes.func,
};

export default AsideOption;