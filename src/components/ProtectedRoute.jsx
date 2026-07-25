import React from 'react'
import { Navigate, Outlet} from "react-router-dom";
//Imported the useContext to have access to the user
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

//Function to check authenticated users and unauthorized users are redirected to the login page
const ProtectedRoute = () => {
    const { user } = useContext(UserContext);
    if (!user) {
        return <Navigate to="/login" replace />
    }
    return <Outlet/>
}

export default ProtectedRoute
