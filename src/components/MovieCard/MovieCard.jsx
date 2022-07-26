import { useEffect, useState } from "react"
import { fetchMovieById } from "services/movieAPI";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { Box } from "components/Box";

export const MovieCard = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        const getMovie = async(id) => {
          try {
              const data = await fetchMovieById(id);
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
            <Box 
                width={1 / 4}
                p="3"
                borderWidth="3"
                borderStyle='solid'
                borderColor='accent'
                borderRadius="normal"
                bg="background"
                display="flex"
                flexDirection="column"
                alignItems="center"
                mr="auto"
                ml="auto"
                as="div">
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} height="400" width="300" alt={title} />
            <h2>{title}</h2>
            <p>User score: <span>{userScore}%</span></p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <p>{movieGenres}</p>
        </Box>
        )
    }
    
}
 
MovieCard.propTypes = {
    movieId: PropTypes.string,
    movie: PropTypes.shape({
        title: PropTypes.string,
        vote_average: PropTypes.number,
        overview: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string),
        poster_path: PropTypes.string,
    })
}
