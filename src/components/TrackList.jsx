import axios from "axios";
import { useEffect, useState } from "react";

const TrackList = ({ setPlayClicked }) => {
  const [tracks, setTracks] = useState([]);

  const getAllTracks = async () => {
    console.log(import.meta.env.VITE_BACKEND_URL);
    const url = `${import.meta.env.VITE_BACKEND_URL}/tracks`;
    const response = await axios.get(url);
    console.log(response);
    setTracks(response.data);
  };

  const handleDelete = async (event) => {
    const id = event.target.value;
    const url = `${import.meta.env.VITE_BACKEND_URL}/tracks/${id}`;
    const response = await axios.delete(url);
    return response, getAllTracks();
  };

  useEffect(() => {
    getAllTracks();
  }, []);

  return (
    <div>
      <h1>Tracks List</h1>
      <ul>
        {tracks.map((track) => {
          return (
            <>
              <p>{track.title} by {track.artist}</p>
              <button onClick={handleDelete} value={track._id}>
                Delete
              </button>
              <button>Edit</button>
              <button value={track}>
                Play
              </button>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default TrackList;
