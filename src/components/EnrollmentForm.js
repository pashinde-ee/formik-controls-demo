import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';

const EnrollmentForm = () => {
    const dropdownOptions = [
        {key: "Select course", value:""},
        {key: "React", value:"react"},
        {key: "Vue", value:"vue"},
        {key: "Angular", value:"angular"},
    ];

    const checkboxOptions = [
        {key: "HTML", value:"html"},
        {key: "CSS", value:"css"},
        {key: "Javascript", value:"javascript"}
    ];

    const initialValues = {
        email: "",
        bio: "",
        course: "",
        skills: [],
        courseDate: null
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email is requried'),
        bio: Yup.string().required('Bio is required'),
        course: Yup.string().required('Course is required'),
        courseDate: Yup.date().required('Course date is requried').nullable()
    });

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
                            type="text"
                            label="Bio"
                            name="bio"
                        />
                        <FormikControl
                            control="select"
                            label="Course"
                            name="course"
                            options={dropdownOptions}
                        />
                        <FormikControl
                            control="checkbox"
                            label="Your skillset"
                            name="skills"
                            options={checkboxOptions}
                        />
                        <FormikControl
                            control="date"
                            label="Course Date"
                            name="courseDate"
                        />
                        <button type="submit" disabled={!formik.isValid}>Submit</button>
                    </Form>
                }
            }
        </Formik>
    );
};

export default EnrollmentForm;