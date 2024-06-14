import React from 'react';
import { Link } from 'react-router-dom';
import { DivLinkProps } from '../interfaces/interfaces'; // Adjust the import path as necessary

const DivLink: React.FC<DivLinkProps> = ({ text, route, styling }) => {
    return (
        <Link to={route}>
            <div className={`cursor-pointer ${styling}`}>
                {text}
            </div>
        </Link>
    );
};

export default DivLink;
