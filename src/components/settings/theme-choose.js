import React from "react";
  
const ThemeChoose = () => {
  return(
    <div className='settings-block'>
      <form>
        <div>Theme:</div>
        <input 
          name="theme" 
          type="radio" 
          value="dark"
          defaultChecked
        />
        <span className='option'>&nbsp;dark</span>
        <br />
        <input 
          name="theme" 
          type="radio" 
          value="lite" 
        /> 
        <span className='option'>&nbsp;lite</span>
      </form> 
    </div>
  );
};

export default ThemeChoose;