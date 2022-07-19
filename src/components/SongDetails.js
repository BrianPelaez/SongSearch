import React from 'react';
import SongArtist from './SongArtist';
import SongLetra from './SongLetra';

const SongDetails = ({search, letra, bio}) => {
    return (
        <div className="container">
            <h1>Detalles</h1>
            <SongArtist/>
            <SongLetra/>
        </div>
    )
}

export default SongDetails;