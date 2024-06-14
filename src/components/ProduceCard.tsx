import React from 'react';
import { ProduceCardProps } from '../interfaces/interfaces'; // Adjust the import path as necessary

const ProduceCard: React.FC<ProduceCardProps> = ({ text, imagePath }) => {
    return (
        <div className='flex bg-white p-1 h-28 justify-between items-center pl-4'>
            <p className='text-lg '>
                {text}
            </p>
            <img src={imagePath} alt={`image of ${text}`} className='h-full w-40' />
        </div>
    );
};

export default ProduceCard;
