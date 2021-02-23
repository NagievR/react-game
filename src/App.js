import React from "react";
import "./scss/main.scss";

import Header from "./components/header.js";
import MainRow from "./components/main-row.js";

function App() {
  return ( 
    <div className='app'>
      <Header />
      <MainRow />
    </div>
  );
}

export default App;