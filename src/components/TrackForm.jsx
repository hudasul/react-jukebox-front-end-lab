import { useState } from "react";
import axios from "axios";

const TrackForm = ({ setFormIsShown }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);
    const url = `${import.meta.env.VITE_BACKEND_URL}/tracks`;
    const response = await axios.post(url, formData);
    console.log(response);
    if (response.status === 201) {
      setFormIsShown(false);
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <h2>Add Your Pet</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          value={formData.title}
        />
        <br />
        <br />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          name="artist"
          type="text"
          onChange={handleChange}
          value={formData.artist}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default TrackForm;
