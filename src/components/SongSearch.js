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

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHTTP().get(artistUrl),
        helpHTTP().get(songUrl),
      ]);

      // console.log(artistRes)
      // console.log(songRes)

      setBio(artistRes);
      setLetra(songRes);
      setLoading(false);
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
      <article className="grid-1-3">
        <SongForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {search && !loading && (
          <SongDetails search={search} letra={letra} bio={bio} />
        )}
      </article>
    </div>
  );
};

export default SongSearch;
