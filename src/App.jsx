// src/App.jsx
import { useState } from "react"
import axios from "axios"

import TrackList from "./components/TrackList";
import TrackForm from "./components/TrackForm";
import NowPlaying from "./components/NowPlaying";

const App = () => {
  const [formIsShown, setFormIsShown] = useState(false);
  const [showPlay, setShowPlay] = useState(false)
  const handleShowFormClick = () => {
    setFormIsShown(true);
  };


  return (
    <>
      <button onClick={handleShowFormClick}>Add New Track</button>

      {formIsShown ? (
        <TrackForm setFormIsShown={setFormIsShown} />
      ) : (
        null
      )}
      <TrackList />

       {showPlay? (
         <NowPlaying />) : (
        null
      )}
      
      
    </>
  );
};

export default App;
