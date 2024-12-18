
import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.description}</p>
                    <Link to={`/movie/${movie.id}`} className="btn btn-primary">Dettagli</Link>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
