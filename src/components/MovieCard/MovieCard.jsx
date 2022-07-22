import { useEffect, useState } from "react"
import { fetchMovieById } from "services/movieAPI";
import { useParams } from "react-router-dom";

export const MovieCard = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        const getMovie = async(id) => {
          try {
              const data = await fetchMovieById(id);
              console.log(data);
              setMovie(data);
          } catch (error) {
              console.log(error.message);
            }
        }  
        
     getMovie(movieId);

    }, [movieId])

    if (Object.keys(movie).length > 0) {
        const { title, vote_average, overview, genres, poster_path } = movie;
        const userScore = vote_average * 10;
        const movieGenres = genres.map(genre => genre.name).join(", ");

        return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="{title}" />
            <h2>{title}</h2>
            <p>User score: <span>{userScore}%</span></p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <p>{movieGenres}</p>
        </div>
        )
    }
    
}