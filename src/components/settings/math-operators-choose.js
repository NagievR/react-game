import React from "react";
  
const MathOperators = () => {
  return(
    <div className='settings-block'>
      <form>
        <span>Theme:</span>
        <br />
        <input 
          type="radio" 
          id="dark"
          value="dark"
          name='dark'
          checked="checked"
        />
        <label for="dark"> Dark</label>
        <br />
        <input 
          type="radio" 
          id="lite"
          value="lite"
          name='lite'
        />
        <label for="lite"> Lite</label>
      </form>
    </div>
  );
};

export default MathOperators;