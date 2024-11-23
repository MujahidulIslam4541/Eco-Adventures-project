import { useContext } from "react";
import Navbar from "./Navbar";
import { authContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";


export default function UserInpormation() {
    const { user } = useContext(authContext)

    return (
        <div className="w-11/12 mx-auto">
            <div className="h-20">
                <Navbar></Navbar>
            </div>

            <div className="flex justify-center items-center animate__animated animate__backInUp">
                <div className="py-12 min-h-screen rounded ">
                    {
                        user ?
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={user.photoURL}
                                        alt="Profile"
                                        className=" w-full h-48 rounded-lg"
                                    />
                                </figure>
                                <div className="card-body ">
                                    <h2 className="card-title text-xl font-semibold"> Display Name :{user.displayName}</h2>
                                    <p className="text-gray-500"> User Email: {user.email}</p>
                                    <div className="card-actions">
                                        <Link to='/user' className="btn btn-secondary">Edit Profile</Link>
                                    </div>
                                </div>
                            </div>

                            :
                            <div className="flex flex-col items-center text-center">
                                <div className="text-gray-400 mb-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-16 w-16 mx-auto"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12h6m-3-3v6m-7 4a9 9 0 1118 0 9 9 0 01-18 0z"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-600">No Information Available</h2>
                                <p className="text-gray-500 mt-2">
                                    Please provide your profile details to view them here.
                                </p>
                                <Link to="/auth/login" className="btn bg-blue-500 text-white mt-5">Add Information</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
