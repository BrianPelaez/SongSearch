import React from 'react';

const SongLetra = ({letra, title}) => {
    return (
        <section>
            <h3>{title}</h3>
            {letra && <blockquote style={{whiteSpace: 'pre-wrap'}}>{letra.lyrics}</blockquote>}
        </section>
    )
}

export default SongLetra;