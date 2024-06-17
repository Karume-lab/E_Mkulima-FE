import React from 'react';
import { DivLink } from '../../components';


interface SellCriteriaLink {
    text: string;
    link: string
}


const sellCriteriaLinks: SellCriteriaLink[] = [
    {
        text: "Location",
        link: "/dashboard/produce/sell/locations",
    },
    {
        text: "Category",
        link: "/dashboard/produce/sell/categories",
    },
    {
        text: "Description",
        link: ""
    },
    {
        text: "Name",
        link: ""
    },
    {
        text: "Contact",
        link: "/dashboard/produce/buy/id/message"
    }
]
const SellCriteriaList: React.FC = () => {
    return (
        <div className="max-w-md mx-auto">
            {sellCriteriaLinks.map(({ text, link }, index: number) => {
                return (
                    <DivLink
                        route={link}
                        text={text}
                        styling="p-3 text-lg bg-white m-2 rounded transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                        key={index}
                    />
                );
            })}
        </div>

    );
};

export default SellCriteriaList;
