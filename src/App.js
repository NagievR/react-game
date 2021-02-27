import React, { useState } from "react";
import "./scss/main.scss";
import MainRow from "./components/main-row.js";
import mainSong from "./assets/audio/main-song.mp3";

function App() {

  const [musicPlaying, setMusicPlaying] = useState (false);

  const handleClick = () => {
    if (musicPlaying) {
      return;
    }
    setMusicPlaying(true);
    const song = new Audio(mainSong);
    song.loop = true;
    song.play();
  };

  return ( 
    <div className='app' onClick={handleClick}>
      <MainRow />
    </div>
  );
}

export default App;