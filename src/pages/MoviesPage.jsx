import { Outlet, useParams } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

export const MoviesPage = ({ onSubmit }) => {
    
    const { movieId } = useParams();
    return (
        movieId ?   <Outlet /> 
                :   <Formik initialValues={{ movie: '' }}
                    validationSchema={Yup.object({ movie: Yup.string() })}
                    onSubmit={onSubmit}
                    >
                    <Form>
                        <Field name='movie' type='text'/>
                        <button type='submit'>Search</button>
                    </Form>
                    </Formik>
    )
}