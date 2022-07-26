import { useSearchParams } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { MovieList } from '../components/MovieList/MovieList';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { fetchMovieByKeyWord } from 'services/movieAPI';
import { Loader } from '../components/Loader/Loader';

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const query = searchParams.get("query") ?? "";
     
    useEffect(() => {
        const getMoviesByKeyWord = async (keyWord) => {
            setIsLoading(true);
            try {
                const data = await fetchMovieByKeyWord(keyWord);
                setMovies(data.results);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
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
                 {isLoading && <Loader />}
                 {Object.keys(movies).length > 0 && <MovieList movies={movies} />}                 
             </>
    )
}

export default MoviesPage;