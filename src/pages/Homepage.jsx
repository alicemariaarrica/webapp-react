import React from 'react';
import MovieCard from '../components/MovieCard';
import CreateHeader from '../components/Header';
import CreateFooter from '../components/Footer';

export default function CreateHomePage() {
    const movies = [
        { id: 1, title: 'Film 1', description: 'Descrizione del Film 1' },
        { id: 2, title: 'Film 2', description: 'Descrizione del Film 2' },
        { id: 3, title: 'Film 3', description: 'Descrizione del Film 3' }
    ];

    return (
        <div className="row">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}
