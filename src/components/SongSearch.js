import React, { useEffect, useState } from "react";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import Loader from "./Loader";
import { helpHTTP } from "../helpers/helpHTTP";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [letra, setLetra] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchSong = async () => {
      const { artist, song } = search;

      let artistUrl = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      let headers = {
        headers:{
            'Content-Type': 'application/json'
          }
      }
      setLoading(true);
      const [artistRes, songRes] = await Promise.all([
        helpHTTP().get(artistUrl),
        helpHTTP().get(songUrl, headers)
      ]);

      

      setBio(artistRes);
      setLetra(songRes)
      setLoading(false);
      console.log(artistRes)
      console.log(songRes)
    };

    fetchSong();
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
    setLoading(true);
  };

  return (
    <div>
      <h1>Buscador de canciones</h1>
      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      <SongDetails search={search} letra={letra} bio={bio} />
    </div>
  );
};

export default SongSearch;
