import React from 'react';
import { ProduceCardProps } from '../interfaces/interfaces'; // Adjust the import path as necessary

const ProduceCard: React.FC<ProduceCardProps> = ({ text, imagePath }) => {
    return (
            <div className=''>
                {text}
                <img src={imagePath} alt={text} />
            </div>
    );
};

export default ProduceCard;
