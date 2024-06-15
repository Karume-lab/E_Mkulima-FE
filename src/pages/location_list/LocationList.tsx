import DivLink from "../../components/DivLink";
import Done from "../../components/Done";
import { locations } from "../../MOCK_DATA";

const LocationList = () => {
    return (
        <>
            <ul className="flex flex-col max-w-xl mx-auto gap-2">
                {locations.map((location: string, index: number) => (
                    <li key={index} className="m-2">
                        <DivLink
                            route="/dashboard/produce/buy"
                            styling="p-3 text-lg bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                            text={location}
                        />
                    </li>
                ))}
            </ul>
            <Done />
        </>
    );
};

export default LocationList;
