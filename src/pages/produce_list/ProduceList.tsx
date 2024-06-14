import produce from "../../MOCK_DATA/produce";

const ProduceList = () => {
    return (
        <ul>
            {
                produce.map(({ name, image }) => {
                    return (
                        <li>
                            <span>{name}</span>
                            <img src={image} alt={`Image of ${name}`} />
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default ProduceList;
