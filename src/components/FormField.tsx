// FormField.tsx
import React from 'react';
import { FormFieldProps } from '../interfaces/interfaces'; // Adjust the import path as necessary

const FormField: React.FC<FormFieldProps> = ({ label, placeholder, field, required }) => {
    return (
        <div className="">
            <label htmlFor={field}>
                {label}
                {required && <span className="required">*</span>}
            </label>
            <input
                type="text"
                id={field}
                name={field}
                placeholder={placeholder}
                required={required}
                className=""
            />
        </div>
    );
};

export default FormField;
