import React from 'react';
import Input from './Input';
import TextArea from './TextArea';

function FormikControl(props) {
    const { control, ...rest } = props

    switch(control) {
        case 'input':
            return <Input {...rest} />;
        case 'textarea':
            return <TextArea {...rest} />;
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
};

export default FormikControl;