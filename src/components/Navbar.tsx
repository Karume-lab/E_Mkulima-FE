import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <ul className="flex gap-2">
            <Link to={"/"}>
                home
            </Link>

            <Link to={"/about"}>
                about
            </Link>
            <Link to={"/contact"}>
                contact
            </Link>
        </ul>
    )
}

export default Navbar
