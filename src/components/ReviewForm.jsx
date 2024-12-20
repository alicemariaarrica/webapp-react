import React, { useState } from 'react';

function ReviewForm({ onSubmitReview }) {
    const [reviewText, setReviewText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (reviewText) {
            onSubmitReview(reviewText);
            setReviewText('');  // Reset the form
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="review">Aggiungi la tua recensione</label>
                <textarea
                    id="review"
                    className="form-control"
                    rows="4"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Invia Recensione</button>
        </form>
    );
}

export default ReviewForm;
