import { Loader } from "components/Loader/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "services/movieAPI";
import PropTypes from 'prop-types'; 

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getReview = async (id) => {
            setIsLoading(true);
            try {
                const data = await fetchReviewById(id);
                const allReviews = data.results.map(({ author, content, id }) => ({ author, content, id }));
                setReviews(allReviews);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
    
        getReview(movieId);
        
    }, [movieId])

    if (reviews.length > 0) {
        return (
            <ul>
                {reviews.map(({ author, content, id }) => {
                    return (
                        <li key={id}>
                            <p>Author: {author}</p>
                            <p>{content}</p>
                        </li>
                    )
                }
                )}
            </ul>
        )
    }
    else if (isLoading) {
        return <Loader/>
    } else {
        return <p>We don't have any reviews for this movie</p>;
    }
}

Reviews.propTypes = {
    movieId: PropTypes.string,
    isLoading: PropTypes.bool,
    reviews: PropTypes.shape({
        author: PropTypes.string,
        content: PropTypes.string,
        id: PropTypes.number,
    })
}

export default Reviews;
