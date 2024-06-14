import React from "react";
import { Link } from "react-router-dom";
import produce from "../../MOCK_DATA/produce";

const ProduceList: React.FC = () => {
    return (
        <ul>
            {produce.map(({ id, name, image }) => (
                <li key={id}>
                    <Link to={`/dashboard/produce/buy/${id}`}>
                        <span>{name}</span>
                        <img src={image} alt={`Image of ${name}`} style={{ width: '100px', height: '100px' }} />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ProduceList;
