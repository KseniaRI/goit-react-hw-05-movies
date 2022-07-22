import { Outlet } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

export const MoviesPage = ({onSubmit}) => {
    return (
        <>
            <Formik
                initialValues={{ movie: '' }}
                validationSchema={Yup.object({ movie: Yup.string() })}
                onSubmit={onSubmit}
            >
                <Form>
                    <Field name='movie' type='text'/>
                    <button type='submit'>Search</button>
                </Form>
            </Formik>
            <Outlet />
        </>
    )
}