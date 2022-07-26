import { Suspense } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MovieCard } from '../components/MovieCard/MovieCard';

const MovieDetailsPage = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
        return (
            <>
                <Link to={backLinkHref}>Go back</Link>
                <MovieCard />
                <div>
                    <h3>Additional information</h3>
                    <Link to='cast'>Cast</Link>
                    <Link to='reviews'>Reviews</Link>
                </div>
                <Suspense fallback={null}>
                    <Outlet/>
                </Suspense>
                
            </>
        )
}

export default MovieDetailsPage;