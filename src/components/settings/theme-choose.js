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
        <span>&nbsp;Dark</span>
        <br />
        <input 
          name="theme" 
          type="radio" 
          value="lite" 
        /> 
        <span>&nbsp;Lite</span>
      </form> 
    </div>
  );
};

export default ThemeChoose;