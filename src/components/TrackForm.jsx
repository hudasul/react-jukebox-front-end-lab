import { useState } from "react";
import axios from "axios";

const TrackForm = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const initialState = { title: "", artist: "" };
  const [formData, setFormData] = useState(
    props.selected ? props.selected : initialState
  );

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/tracks`;
    const url = props.selected ? `${baseUrl}/${props.selected._id}` : baseUrl;
    const method = props.selected ? "put" : "post";

    const response = await axios[method](url, formData);
    console.log(response);

    if (response.status === 200 || response.status === 201) {
      props.setFormIsShown(false);
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <h2>{props.selected ? "Update Pet" : "Add new Track"}</h2>
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
        <button type="submit">
          {props.selected ? "Update Pet" : "Submit"}
        </button>
      </form>
    </>
  );
};

export default TrackForm;
