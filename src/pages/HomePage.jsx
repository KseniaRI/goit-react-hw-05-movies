import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "services/movieAPI";
import { MovieList } from '../components/MovieList/MovieList';
import { Loader } from '../components/Loader/Loader';

const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getTrendingMovies = async () => {
             setIsLoading(true);
           try {
            fetchTrendingMovies().then(data => setTrendingMovies([...data.results]));
           } catch (error) {
               console.log(error.message);
           } finally {
                setIsLoading(false);
            }
       } 
        getTrendingMovies();
    }, [])
    return (
        <>
            <p>TrendingToday</p>
            {isLoading && <Loader />}
            {trendingMovies.length > 0 && <MovieList movies={trendingMovies} />} 
        </>
    )
}

export default HomePage;