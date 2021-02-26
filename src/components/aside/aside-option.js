import React from "react";

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

export default AsideOption;