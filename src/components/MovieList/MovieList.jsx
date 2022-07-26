import { Link, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
        <ul>
            {movies.map(({id, title}) => <li key={id}><Link to={`/movies/${id}`} state={{from: location}}>{title}</Link></li>)}
        </ul>
    )
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
    }))
}
