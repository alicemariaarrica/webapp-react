
import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
    return (
        <div className="card">
            <img src={`https://via.placeholder.com/300x200?text=${movie.title}`} alt={movie.title} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.description}</p>
                <Link to={`/movie/${movie.id}`} className="btn btn-primary">Vedi Dettagli</Link>
            </div>
        </div>
    );
}

export default MovieCard;
