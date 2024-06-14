import DivLink from '../../components/DivLink';


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
const SellCriteriaList = () => {
    return (
        <div>
            {sellCriteriaLinks.map(({ text, link, }, index: number) => {
                return (
                    <DivLink route={link} text={text} styling='' key={index} />
                )
            })}
        </div>
    );
};

export default SellCriteriaList;
