import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import FormikControl from './FormikControl';
import { Button } from '@chakra-ui/button';

const LoginForm = () => {
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
                            control="chakrainput"
                            type="email"
                            label="Email"
                            name="email"
                        />
                        <FormikControl
                            control="chakrainput"
                            type="password"
                            label="Password"
                            name="password"
                        />
                        <Button colorScheme="blue" type="submit" className="" disabled={!formik.isValid}>Login</Button>
                    </Form>
                }
            }
        </Formik>
    );
};

export default LoginForm;