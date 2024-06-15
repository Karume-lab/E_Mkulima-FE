import DivLink from "./DivLink";

const Done = () => {
    return (
        <DivLink
            text={"Done"}
            route={"/dashboard"}
            styling="m-5 rounded-lg bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition duration-200 ease-in-out"
        />
    );
}

export default Done;
