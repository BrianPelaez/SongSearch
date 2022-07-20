import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.artist || !form.song){
        alert("Datos incompletos");
        return;
    }

    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-artist"
          placeholder="Artista..."
          onChange={handleChange}
          value={form.artist}
          name="artist"
        ></input>
        <input
          type="text"
          className="form-artist"
          placeholder="Canción..."
          onChange={handleChange}
          value={form.song}
          name="song"
        ></input>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default SongForm;
