import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children, user }) => {
    // if (!user) {
    //     return <Navigate to="/" />;
    // } else {
    //     return children;
    // }
    return (
        <React.Fragment>
            {!user ? <Navigate to="/" /> : children}
        </React.Fragment>
    );
};

export default ProtectedRoute;
