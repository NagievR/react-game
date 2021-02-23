import React from "react";

const Counter = () => {
  const left = '28';

  return(
    <div className='counter-wrap'>
      <div className='counter'>
        left: {left}
      </div>
    </div>
  );
};

export default Counter;