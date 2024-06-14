import React from 'react';
import { ButtonProps } from '../interfaces/interfaces'; // Adjust the import path as necessary

const Button: React.FC<ButtonProps> = ({text, styling}) => {
    return (
            <button className={`${styling}`}>
                {text}
            </button>
    );
};

export default Button;
