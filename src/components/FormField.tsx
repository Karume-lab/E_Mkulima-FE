// FormField.tsx
import React from 'react';
import { FormFieldProps } from '../interfaces/interfaces'; // Adjust the import path as necessary

const FormField: React.FC<FormFieldProps> = ({ label, placeholder, required, styling }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={label}>
                {label}
                {required && <span className="required">*</span>}
            </label>
            <input
                type="text"
                id={label}
                placeholder={placeholder}
                required={required}
                className={`${styling}`}
            />
        </div>
    );
};

export default FormField;
