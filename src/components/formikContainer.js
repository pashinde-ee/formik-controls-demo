import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function FormikContainer () {
    const options = [
        {key: "", value: "select an option"},
        {key: 1, value: "option 1"},
        {key: 2, value: "option 2"},
        {key: 3, value: "option 3"}
    ];

    const initialValues = {
        email: "",
        description: "",
        selectOption: ""
    };
    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required').email('Invalid email'),
        description: Yup.string().required('description is required'),
        selectOption: Yup.string().required('description is required')
    });
    const onSubmit = (values) => console.log(values);
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => <Form>
                    <FormikControl control="input" type="email" label="Email" name="email"/>
                    <FormikControl control="textarea" label="Description" name="description"/>
                    <FormikControl control="select" label="Select a topic" name="selectOption" options={options}/>
                    <button type="submit">Submit</button>
                </Form>
            }
        </Formik>
    );
};

export default FormikContainer;

