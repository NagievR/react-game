import React from "react";

const AsideOption = ({ iconSrc, openSection }) => {

  const handleClick = () => {
    if (openSection) {
      openSection();
    } else {
      console.log('will add later');
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