import React from "react";

import ExpressionBox from "./expression-box.js";
import Counter from "./counter.js";

const Main = () => {
  return(
    <main className='main'>
      <ExpressionBox />
      <Counter />
    </main>
  );
};

export default Main;