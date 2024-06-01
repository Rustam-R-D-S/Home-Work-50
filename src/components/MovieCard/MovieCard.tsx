import React from 'react';

interface MovieCardProps {
    title: string;
    year: number;
    imageUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, year, imageUrl }) => {
    return (
        <div className="movie-card">
            <img src={imageUrl} alt={`${title} poster`} />
            <h2>{title}</h2>
            <p>{year}</p>
        </div>
    );
};

export default MovieCard;
