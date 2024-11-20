/* eslint-disable react/prop-types */
import { useContext } from "react"
import { authContext } from "../Provider/AuthProvider"
import { Navigate } from "react-router-dom";

export default function PrivetRoutes({children}) {
    const {user}=useContext(authContext);

    if(user && user.email){
        return children;
    }
  return <Navigate to={`/auth/login`}></Navigate>
   
}
