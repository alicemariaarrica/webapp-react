import { Link } from "react-router-dom"


import Title from './Title';
import Author from './Author';
import Overview from './Overview';
import ReadMoreButton from './ReadMoreButton';

export default function MovieCard({ book }) {
    return (
        <div className="movie card">
            <div className="card-body">
                <Title title={movie.title} />
                <Author author={movie.author} />
                <Overview overview={movie.overview} />
                <ReadMoreButton movieId={movie.id} />
            </div>
        </div>
    );
}
