import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "services/movieAPI";
import { MovieList } from '../components/MovieList/MovieList';

export const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const getTrendingMovies = async() => {
           try {
            fetchTrendingMovies().then(data => setTrendingMovies([...data.results]));
           } catch (error) {
               console.log(error.message);
           }
       } 
        getTrendingMovies();
    }, [])
    return (
        <>
            <p>TrendingToday</p>
            {trendingMovies.length > 0 && <MovieList movies={trendingMovies} />} 
        </>
    )
}