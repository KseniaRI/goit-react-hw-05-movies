import { Outlet, useParams } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { MovieList } from '../components/MovieList/MovieList';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { fetchMovieByKeyWord } from 'services/movieAPI';

export const MoviesPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState({});
    const { movieId } = useParams();
    useEffect(() => {
        const getMoviesByKeyWord = async (keyWord) => {
            try {
                const data = await fetchMovieByKeyWord(keyWord);
                setMovies(data.results);
            } catch (error) {
                console.log(error);
            }
        }
        if (searchQuery.length > 0) {
             getMoviesByKeyWord(searchQuery);
        }
    }, [searchQuery])
    
    return (
        movieId ? <Outlet /> 
                :   <>
                        <Formik initialValues={{ movie: '' }}
                        validationSchema={Yup.object({ movie: Yup.string() })}
                        onSubmit={({movie})=>setSearchQuery(movie)}
                        >
                        <Form>
                            <Field name='movie' type='text'/>
                            <button type='submit'>Search</button>
                        </Form>
                        </Formik>
                {Object.keys(movies).length > 0 && <MovieList movies={movies} />}                 
                    </>
    )
}