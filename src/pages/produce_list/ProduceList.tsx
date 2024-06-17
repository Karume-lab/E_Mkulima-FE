import React from "react";
import { Link } from "react-router-dom";
import { ProduceCard } from "../../components";
import { ProduceListProps, Produce } from "../../interfaces/interfaces";

interface OptionalProduceListProps extends ProduceListProps {
    isAdminPanel: boolean;
}

const ProduceList: React.FC<OptionalProduceListProps> = ({ produce, onUpdateProduct, onDeleteProduct, isAdminPanel }) => {
    const handleUpdate = (updatedProduct: Produce) => {
        if (onUpdateProduct) {
            onUpdateProduct(updatedProduct);
        }
    };

    const handleDelete = (id: number) => {
        if (onDeleteProduct) {
            onDeleteProduct(id);
        }
    };

    return (
        <ul className="flex flex-col gap-4 max-w-6xl mx-auto">
            {produce.map(({ id, name, image }) => (
                <>
                    <Link to={`/dashboard/produce/buy/${id}`} key={id} className="group">
                        <li className="transform transition duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg">
                            <ProduceCard text={name} imagePath={image} />
                        </li>
                    </Link>
                    <div className="mt-2 flex justify-center gap-2">
                        {isAdminPanel && onUpdateProduct && (
                            <button
                                onClick={() => handleUpdate({ id, name, image })}
                                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded focus:outline-none"
                            >
                                Update
                            </button>
                        )}
                        {isAdminPanel && onDeleteProduct && (
                            <button
                                onClick={() => handleDelete(id)}
                                className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded focus:outline-none"
                            >
                                Delete
                            </button>
                        )}
                    </div>
                </>
            ))}
        </ul>
    );
};

export default ProduceList;
