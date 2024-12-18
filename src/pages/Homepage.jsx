
import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

export default function CreateHomePage() {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        const fetchMovies = async () => {

            const fetchedMovies = [
                { id: 1, title: "Film 1", description: "Descrizione Film 1" },
                { id: 2, title: "Film 2", description: "Descrizione Film 2" },
                { id: 3, title: "Film 3", description: "Descrizione Film 3" }
            ];
            setMovies(fetchedMovies);
        };

        fetchMovies();
    }, []);

    return (
        <div className="container mt-4">
            <h1>Lista dei Film</h1>
            <div className="row">
                {movies.map(movie => (
                    <div className="col-12 col-md-4" key={movie.id}>
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
}
