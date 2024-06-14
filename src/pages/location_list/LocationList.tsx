import DivLink from "../../components/DivLink";
import { locations } from "../../MOCK_DATA";

const LocationList = () => {
	return (
		<ul>
			{locations.map((location: string, index: number) => (
				<DivLink
					route="/dashboard/produce/buy"
					styling=""
					text={location}
					key={index}
				/>
			))}
		</ul>
	);
};

export default LocationList;
