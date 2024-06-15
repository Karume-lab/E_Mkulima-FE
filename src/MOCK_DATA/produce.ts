import Cabbage from "/cabbage.jpg";
import Bananas from "/bananas.jpg";
import Chilly from "/chilly.jpg";
import Eggs from "/eggs_crate.jpg";
import Pumpkin from "/pumpkin.jpg";

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
