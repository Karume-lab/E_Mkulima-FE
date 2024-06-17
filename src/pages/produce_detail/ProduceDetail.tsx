import React from "react";
import { useParams } from "react-router-dom";
import produce from "../../MOCK_DATA/produce";
import { DivLink, Done } from "../../components";

const ProduceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const item = produce.find(produceItem => produceItem.id === parseInt(id!));

    if (!item) {
        return <div className="text-center text-red-500 text-xl font-semibold">Produce not found</div>;
    }

    return (
        <div className="container mx-auto p-4 flex flex-col items-center justify-center">
            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl p-10 w-full md:w-96 mb-8">
                <img src={item.image} alt={`Image of ${item.name}`} className="w-full md:w-96 object-contain" />
                <h1 className="text-2xl text-center font-bold mt-5 text-gray-800">{item.name}</h1>
            </div>
            <div className="flex gap-5">
                <DivLink text={"Call"} route={`/dashboard/produce/buy/${id}/contacts`} styling="rounded-lg bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition duration-200 ease-in-out" />
                <DivLink text={"Chat"} route={`/dashboard/produce/buy/${id}/contacts`} styling="rounded-lg bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition duration-200 ease-in-out" />
            </div>
            <Done />
        </div>
    );
};

export default ProduceDetail;
