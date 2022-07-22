import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "services/movieAPI";

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState({});

    useEffect(() => {
        const getCast = async (id) => {
            try {
                const data = await fetchCastById(id);
                console.log(data.cast);
                const castInfo = data.cast.map(({ name, character, profile_path, id }) => ({ name, character, profile_path, id }));
                setCast(castInfo);
            } catch (error) {
                console.log(error);
            }
        }
    
        getCast(movieId);
        
    }, [movieId])

    if (cast.length > 0) {
        
        return (
            <ul>
                {cast.map(({ name, character, profile_path, id }) => {
                    let path = "";
                    profile_path ? path = `https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}` : path = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png';
                        return (
                            <li key={id}>
                                <img width="138" src={path} alt={name} />
                                <p>{name}</p>
                                <p>Character: {character}</p>
                            </li>
                        )
                }
                )}
            </ul>
        )
    }
}