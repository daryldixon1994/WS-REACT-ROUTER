import { Link } from "react-router-dom";
import React from "react";
const NavBar = () => {
    return (
        <nav className="navbar">
            <Link className="link" to="/">
                Home
            </Link>
            <Link className="link" to="/about">
                About
            </Link>
            <Link className="link" to="/products">
                Products
            </Link>
        </nav>
    );
};

export default NavBar;
