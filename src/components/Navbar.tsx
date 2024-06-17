import React from "react"
import { Link } from "react-router-dom"

const Navbar:React.FC = () => {
    return (
        <ul className="flex gap-2">
            <Link to={"/"}>
                Home
            </Link>

            <Link to={"/auth/sign_up"}>
                Sign Up
            </Link>

            <Link to={"/auth/login"}>
                Login
            </Link>
        </ul>
    )
}

export default Navbar
