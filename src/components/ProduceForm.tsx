import React, { useState } from 'react';
import { Produce } from '../interfaces/interfaces';

interface ProduceFormProps {
    onAddProduct: (product: Produce) => void;
}

const ProduceForm: React.FC<ProduceFormProps> = ({ onAddProduct }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !image.trim()) {
            alert('Please enter both produce name and image URL.');
            return;
        }
        onAddProduct({ id: Date.now(), name, image });
        setName('');
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Produce Name:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500"
                    placeholder="Enter produce name"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image URL:</label>
                <input
                    id="image"
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500"
                    placeholder="Enter image URL"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Add Produce
            </button>
        </form>
    );
};

export default ProduceForm;
