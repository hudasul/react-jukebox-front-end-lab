// src/App.jsx
import { useState } from "react";


import TrackList from "./components/TrackList";
import TrackForm from "./components/TrackForm";
import NowPlaying from "./components/NowPlaying";

const App = () => {
  const [formIsShown, setFormIsShown] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleShowFormClick = () => {
    setFormIsShown(true);
  };

  const handleSelect = (track) => {
    setSelected(track);
  };

  return (
    <>
      <button onClick={handleShowFormClick}>Add New Track</button>

      {formIsShown ? <TrackForm setFormIsShown={setFormIsShown} /> : null}
      <TrackList handleSelect={handleSelect} />

      {selected ? <NowPlaying selected={selected} /> : null}
    </>
  );
};

export default App;
