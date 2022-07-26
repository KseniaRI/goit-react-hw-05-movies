import { useSearchParams } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { MovieList } from '../components/MovieList/MovieList';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { fetchMovieByKeyWord } from 'services/movieAPI';

export const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState({});
    const query = searchParams.get("query") ?? "";
     
    useEffect(() => {
        const getMoviesByKeyWord = async (keyWord) => {
            try {
                const data = await fetchMovieByKeyWord(keyWord);
                setMovies(data.results);
            } catch (error) {
                console.log(error);
            }
        }
        if (query === "") return;

        getMoviesByKeyWord(query);
        
    }, [query])

    return (
      
                   <>
                        <Formik initialValues={{ query: '' }}
                        validationSchema={Yup.object({ query: Yup.string() })}
                        onSubmit={({ query }, { resetForm }) => {
                            setSearchParams({ query });
                            resetForm();
                        }}
                        >
                            <Form>
                                <Field name='query' type='text' />
                                <button type='submit'>Search</button>
                            </Form>
                        </Formik>
                        {Object.keys(movies).length > 0 && <MovieList movies={movies} />}                 
                    </>
    )
}