function MovieCard({ movie }) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={movie.poster} className="card-img-top" alt={movie.title} />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.description}</p>
                <a href={`/movie/${movie.id}`} className="btn btn-primary">Dettagli</a>
            </div>
        </div>
    );
}

export default MovieCard;
