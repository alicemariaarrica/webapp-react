import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';

function ShowSpecificMoviePage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]); // Stato per le recensioni

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

    const handleAddReview = (newReview) => {
        setReviews([...reviews, newReview]);  // Aggiunge la nuova recensione
    };

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="container mt-4">
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <p><strong>Anno:</strong> {movie.year}</p>

            {/* Componente per il form di recensione */}
            <ReviewForm onSubmitReview={handleAddReview} />

            {/* Se ci sono recensioni, le visualizziamo */}
            <div className="mt-4">
                <h3>Recensioni:</h3>
                {reviews.length === 0 ? (
                    <p>Non ci sono ancora recensioni.</p>
                ) : (
                    <ul>
                        {reviews.map((review, index) => (
                            <li key={index}>{review}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default ShowSpecificMoviePage;
