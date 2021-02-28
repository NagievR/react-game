import React, { useState, useEffect } from "react";
import "./scss/main.scss";
import MainRow from "./components/main-row.js";
import mainSong from "./assets/audio/main-song.mp3";
import useStore from "./logic/store";

function App() {

  const { audioSettings } = useStore();

  const [song] = useState(new Audio(mainSong));

  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    song.volume = audioSettings.musicVolume;
  }, [audioSettings.musicVolume]);

  const handleClick = () => {
    if (musicPlaying) {
      return;
    }
    song.play();
    song.loop = true;
    setMusicPlaying(true);
  };

  return ( 
    <div className='app' onClick={handleClick} >
      <MainRow />
    </div>
  );
}

export default App;