import React from "react";

import Main from "./main.js";
import Aside from "./aside.js";

const MainRow = () => {
  return(
    <div className='main-row'>
      <Main />
      <Aside />
    </div>
  );
};

export default MainRow;