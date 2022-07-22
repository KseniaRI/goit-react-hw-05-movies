import { Link, Outlet } from "react-router-dom";
import { MovieCard } from '../components/MovieCard/MovieCard';

export const MovieDetailsPage = () => {
    
        return (
            <>
                <Link to='/'>Go back</Link>
                <MovieCard />
                <div>
                    <h3>Additional information</h3>
                    <Link to='cast'>Cast</Link>
                    <Link to='reviews'>Reviews</Link>
                </div>
                <Outlet/>
            </>
        )
    
}