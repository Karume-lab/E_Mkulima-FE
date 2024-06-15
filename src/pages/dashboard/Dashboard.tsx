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
        link: "/dashboard/produce/buy/1/contacts"
    }
]
const Dashboard = () => {
    return (
        <div className='flex flex-col gap-16 bg-lime-100 h-full items-center  p-5'>
            <img src="" alt="" className='' />
            {dashBoardLinks.map(({ text, link, }, index: number) => {
                return (
                    <DivLink route={link} text={text} styling='bg-white p-4 w-40 rounded-lg border-2 border-lime-800 text-lg hover:bg-lime-200 md:w-52 hover:scale-105 transition hover:drop-shadow-lg ' key={index} />
                )
            })}
        </div>
    );
};

export default Dashboard;
