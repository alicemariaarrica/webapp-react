import React from 'react';
import { useParams } from 'react-router-dom';

function ShowSpecificMoviePage() {
    const { id } = useParams();

    // Data del film
    const movieDetails = {
        title: `Film ${id}`,
        description: `Descrizione dettagliata del Film ${id}`,
        director: 'Regista',
        releaseDate: '2024-12-15'
    };

    return (
        <div className="container mt-4">
            <h1>{movieDetails.title}</h1>
            <p>{movieDetails.description}</p>
            <p><strong>Regista:</strong> {movieDetails.director}</p>
            <p><strong>Data di uscita:</strong> {movieDetails.releaseDate}</p>
        </div>
    );
}

export default ShowSpecificMoviePage;
