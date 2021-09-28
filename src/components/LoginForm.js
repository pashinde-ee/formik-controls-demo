import React from 'react';
import * as Yup from 'yup';
import { Rormik, Form, Formik } from 'formik';
import FormikControl from './FormikControl';

const LoginForm = (props) => {
    const initialValues = {
        email: "",
        password: ""
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email').required('email is required'),
        password: Yup.string().required('Password is required')
    })

    const onSubmit = values => {
        console.log(values)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => {
                    return <Form>
                        <FormikControl
                            control="input"
                            type="email"
                            label="Email"
                            name="email"
                        />
                        <FormikControl
                            control="input"
                            type="password"
                            label="Password"
                            name="password"
                        />
                        <button type="submit" disabled={!formik.isValid}>Login</button>
                    </Form>
                }
            }
        </Formik>
    );
};

export default LoginForm;