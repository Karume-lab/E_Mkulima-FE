import React from "react";
import { Link } from "react-router-dom";
import produce from "../../MOCK_DATA/produce";
import ProduceCard from "../../components/ProduceCard";

const ProduceList: React.FC = () => {
    return (
        <ul className="flex flex-col gap-2">
            {produce.map(({ id, name, image }) => (
                <Link to={`/dashboard/produce/buy/${id}`} >
                    <li key={id}>
                        <ProduceCard text={name} imagePath={image} />
                    </li>
                </Link>
            ))}
        </ul>
    );
};

export default ProduceList;
