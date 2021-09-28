import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const RegisterForm = () => {
    const options = [
        {key:"Email", value:"emailmoc"},
        {key:"Telephone", value:"telephonemoc"}
    ];
    const initialValues = {
        email: "",
        password: "",
        confirmPassword: "",
        modeOfContact: "",
        phone: ""
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match').required('Re-enter password'),
        modeOfContact: Yup.string().required('Select mode of contact'),
        phone: Yup.string().when('modeOfContact', {
            is: "telephonemoc",
            then: Yup.string().required('Phone is required whtn moc is telephone')
        })
    });

    const onSubmit = values => {
        console.log(values);
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
                        <FormikControl
                            control="input"
                            type="password"
                            label="Confrim password"
                            name="confirmPassword"
                        />
                        <FormikControl
                            control="radio"
                            label="Mode of Contact"
                            name="modeOfContact"
                            options={options}
                        />
                        <FormikControl
                            control="input"
                            type="text"
                            label="Phone"
                            name="phone"
                        />
                        <button type="submit" disabled={!formik.isValid}>Register</button>
                    </Form>
                }
            }
        </Formik>
    );
};

export default RegisterForm;