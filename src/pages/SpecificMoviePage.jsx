import React from 'react';
import { useParams } from 'react-router-dom';

function ShowSpecificMoviePage() {
    const { id } = useParams();
    return (
        <div className="container mt-4">
            <h1>Dettagli del Film {id}</h1>

        </div>
    );
}

export default ShowSpecificMoviePage;
