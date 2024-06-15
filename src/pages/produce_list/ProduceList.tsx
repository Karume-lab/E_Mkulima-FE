import React from "react";
import { Link } from "react-router-dom";
import ProduceCard from "../../components/ProduceCard";
import { produce } from "../../MOCK_DATA";

const ProduceList: React.FC = () => {
    return (
        <ul className="flex flex-col gap-4 max-w-6xl mx-auto">
            {produce.map(({ id, name, image }) => (
                <Link to={`/dashboard/produce/buy/${id}`} key={id} className="group">
                    <li className="transform transition duration-300 ease-in-out group-hover:scale-105 rounded-xl group-hover:shadow-lg">
                        <ProduceCard text={name} imagePath={image} />
                    </li>
                </Link>
            ))}
        </ul>
    );
};

export default ProduceList;
