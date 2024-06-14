import React from 'react';
import { ProduceDetailCardProps } from '../interfaces/interfaces'; // Adjust the import path as necessary
import Button from './Button';

const ProduceDetailCard: React.FC<ProduceDetailCardProps> = ({ text, imagePath }) => {
    return (

        <div>
            <img src={imagePath} alt={text} />
            <p>text</p>
            <Button text="Chat" styling='bg-white' />
            <Button text="Call" styling='bg-white' />
            <Button text="Done" styling='bg-white' />
        </div>
    );
};

export default ProduceDetailCard;
