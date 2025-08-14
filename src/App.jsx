// src/App.jsx
import { useState } from "react";

import TrackList from "./components/TrackList";
import TrackForm from "./components/TrackForm";
import NowPlaying from "./components/NowPlaying";

const App = () => {
  const [formIsShown, setFormIsShown] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleShowFormClick = () => {
    setFormIsShown(true);
  };

  const handleSelect = (track) => {
    setSelected(track);
    setIsPlaying(true);
  };

  const handleFormView = (track) => {
    setSelected(track);
    setFormIsShown(true);
    setIsPlaying(false);
  };

  return (
    <>
      <button onClick={handleShowFormClick}>Add New Track</button>

      {

       formIsShown
       ?
       (
        <TrackForm setFormIsShown={setFormIsShown} selected={selected} />
       ) 
       : 
       null
       
      }

      <TrackList handleSelect={handleSelect} handleFormView={handleFormView} />

      {
        isPlaying
         ?
         (
            <NowPlaying selected={selected} setIsPlaying={setIsPlaying} />
         ) 
         :
        null
      }
    </>
  );
};

export default App;
