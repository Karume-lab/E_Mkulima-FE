import Cabbage from "./../../public/cabbage.jpg";
import Bananas from "./../../public/bananas.jpg";
import Chilly from "./../../public/chilly.jpg";
import Eggs from "./../../public/eggs_crate.jpg";
import Pumpkin from "./../../public/pumpkin.jpg";

interface Produce {
    id: number,
    name: string;
    image: string;
}

const produce: Produce[] = [
    {
        id: 1,
        name: "Cabbage",
        image: Cabbage,
    },
    {
        id: 2,
        name: "Sweet Banana",
        image: Bananas,
    },
    {
        id: 3,
        name: "Red Chillies",
        image: Chilly,
    },
    {
        id: 4,
        name: "Eggs",
        image: Eggs,
    },
    {
        id: 5,
        name: "Pumpkin",
        image: Pumpkin,
    }

    // ADD MORE PRODUCE HERE
];

export default produce;
