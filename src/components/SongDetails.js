import React from "react";
import SongArtist from "./SongArtist";
import SongLetra from "./SongLetra";
import Message from "./Message";

const SongDetails = ({ search, letra, bio }) => {
  if (!letra || !bio) return null;
  return (
    <>
      {bio.artists ? (
        <div className="detalis-container">
          <h1>Detalles</h1>
          <SongArtist artist={bio.artists[0]} search={search} />
        </div>
      ) : (
        <Message
          msg={`Error: no existe el artista ${search.artist}`}
          bgColor={"#dc3545"}
        />
      )}

      {letra.error || letra.err || letra.name === "AbortError" ? (
        
        <Message
          msg={`Error: no existe la canción ${search.song}`}
          bgColor={"#dc3545"}
        />
      ) : (
        <div className="letra-container">
        <SongLetra letra={letra} title={search.song} />
        </div>
      )}
    </>
  );
};

export default SongDetails;
