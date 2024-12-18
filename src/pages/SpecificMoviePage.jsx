
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ShowSpecificMoviePage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {

            const movieDetails = {
                id,
                title: `Film ${id}`,
                description: `Descrizione dettagliata del Film ${id}`,
                year: 2024
            };
            setMovie(movieDetails);
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="container mt-4">
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <p><strong>Anno:</strong> {movie.year}</p>
        </div>
    );
}

export default ShowSpecificMoviePage;
