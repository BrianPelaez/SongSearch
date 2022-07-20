import React from "react";

const SongArtist = ({ artist, search }) => {

  return (
    <section>
      {artist ? (
        <>
          <h3>
            {artist.strArtist}
          </h3>
          <img className="artist-logo" src={artist.strArtistThumb} alt={artist.strArtist}></img>
          <p>{artist.intBornYear} - {artist.intDiedYear || "Presente"}</p>
          <p>Pais: {artist.strCountry}</p>
          <p>{artist.strGenre} {artist.strStyle}</p>
          <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">Sitio WEB</a>
          <p>BIOGRAFIA:</p>
          <p>{artist.strBiographyES}</p>

        </>
        ) : null}
      
    </section>
  );
};

export default SongArtist;
