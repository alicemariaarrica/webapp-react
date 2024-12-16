import React from 'react';
import MovieCard from '../components/MovieCard';


function HomePage() {
    return (
        <div className="container mt-4">
            <h1>Lista dei Film</h1>
            <div className="row">
                {movies.map(movie => (
                    <div className="col-md-4" key={movie.id}>
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
