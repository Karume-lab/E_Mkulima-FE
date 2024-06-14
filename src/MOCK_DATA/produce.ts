import Cabbage from "./../../public/cabbage.jpg";
import Bananas from "./../../public/bananas.jpg";
import Chilly from "./../../public/chilly.jpg";
import Eggs from "./../../public/eggs_crate.jpg";
import Pumpkin from "./../../public/pumpkin.jpg";

interface Produce {
    name: string;
    image: string;
}

const produce: Produce[] = [
    {
        name: "Cabbage",
        image: Cabbage,
    },
    {
        name: "Sweet Banana",
        image: Bananas,
    },
    {
        name: "Red Chillies",
        image: Chilly,
    },
    {
        name: "Eggs",
        image: Eggs,
    },
    {
        name: "Pumpkin",
        image: Pumpkin,
    }

    // ADD MORE PRODUCE HERE
];

export default produce;
