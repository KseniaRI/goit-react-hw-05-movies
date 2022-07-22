import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "services/movieAPI";

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        const getReview = async (id) => {
            try {
                const data = await fetchReviewById(id);
                console.log(data.results);
                const allReviews = data.results.map(({ author, content, id }) => ({ author, content, id }));
                setReviews(allReviews);
            } catch (error) {
                console.log(error);
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
    else {
        return <p>We don't have any reviews for this movie</p>
    }
}