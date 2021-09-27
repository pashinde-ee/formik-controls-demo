import React from 'react';

function FormikControl(props) {
    const { control } = props

    switch(control) {
        case 'input':
            return null;
        case 'textarea':
            return null;
        case 'select':
            return null;
        case 'radio':
            return null;
        case 'checkbox':
            return null;
        case 'date':
            return null;
        default:
            return null;
    }

    return (
        <div>

        </div>
    );
};

export default FormikControl;