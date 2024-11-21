/* eslint-disable react/prop-types */
import { useContext } from "react"
import { authContext } from "../Provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";

export default function PrivetRoutes({ children }) {
    const { user, loading } = useContext(authContext);
const location=useLocation()

    // loading added
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }

    // if user && user.email then show the details page
    if (user && user.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={`/auth/login`}></Navigate>

}
