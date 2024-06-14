import React from "react";
import { useParams } from "react-router-dom";
import produce from "../../MOCK_DATA/produce";

const ProduceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const item = produce.find(produceItem => produceItem.id === parseInt(id!));

    if (!item) {
        return <div>Produce not found</div>;
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.image} alt={`Image of ${item.name}`} />
        </div>
    );
};

export default ProduceDetail;
