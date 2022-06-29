import { NavLink } from "react-router-dom";
import React from "react";
const StyledNavBar = () => {
    return (
        <nav className="navbar">
            <NavLink
                className="link"
                to="/"
                style={({ isActive }) =>
                    isActive ? { color: "red", fontWeight: "bold" } : null
                }
            >
                Home
            </NavLink>
            <NavLink
                className="link"
                to="/about"
                style={({ isActive }) =>
                    isActive ? { color: "red", fontWeight: "bold" } : null
                }
            >
                About
            </NavLink>
            <NavLink
                className="link"
                to="/products"
                style={({ isActive }) =>
                    isActive ? { color: "red", fontWeight: "bold" } : null
                }
            >
                Products
            </NavLink>
            <NavLink
                className="link"
                to="/login"
                style={({ isActive }) =>
                    isActive ? { color: "red", fontWeight: "bold" } : null
                }
            >
                Login
            </NavLink>
        </nav>
    );
};

export default StyledNavBar;
