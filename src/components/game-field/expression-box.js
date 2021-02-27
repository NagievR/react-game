import React from "react";
import useStore from "../../logic/store";

const ExpressionBox = () => {
  
  const { mathContainer } = useStore();

  return (
    <div className='expression-box'>
      <div className='expression'>
        {`${mathContainer.expression} =?`}
      </div>
    </div>
  );
};

export default ExpressionBox;