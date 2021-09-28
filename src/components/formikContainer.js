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

    const radioOptions = [
        {key: "option 1", value: "roption 1"},
        {key: "option 2", value: "roption 2"},
        {key: "option 3", value: "roption 3"}
    ];

    const checkboxOptions = [
        {key: "option1", value: "coption1"},
        {key: "option2", value: "coption2"},
        {key: "option3", value: "coption3"}
    ];

    const initialValues = {
        email: "",
        description: "",
        selectOption: "",
        radioOption: "",
        checkboxOption: [],
        birthDate: null
    };
    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required').email('Invalid email'),
        description: Yup.string().required('description is required'),
        selectOption: Yup.string().required('select option is required'),
        radioOption: Yup.string().required('radio option is required'),
        checkboxOption: Yup.array().min(1, 'checkbox option is required'),
        birthDate: Yup.date().required('Birthdate required').nullable()
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
                    <FormikControl control="radio" label="Select a radio tiopic" name="radioOption" options={radioOptions}/>
                    <FormikControl control="checkbox" label="checkbox" name="checkboxOption" options={checkboxOptions}/>
                    <FormikControl control="date" label="Pick a date" name="birthDate"/>
                    <button type="submit">Submit</button>
                </Form>
            }
        </Formik>
    );
};

export default FormikContainer;

