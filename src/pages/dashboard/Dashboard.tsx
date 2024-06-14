import DivLink from '../../components/DivLink';


interface dashBoardLink {
    text: string;
    link: string
}
const dashBoardLinks: dashBoardLink[] = [
    {
        text: "Buy",
        link: "/dashboard/produce/buy",
    },
    {
        text: "Sell",
        link: "/dashboard/produce/sell",
    },
    {
        text: "Messages",
        link: "/dashboard/produce/buy/id/message"
    }
]
const Dashboard = () => {
    return (
        <div>

            {dashBoardLinks.map(({ text, link, }, index: number) => {
                return (
                    <DivLink route={link} text={text} styling='' key={index} />
                )
            })}
        </div>
    );
};

export default Dashboard;
