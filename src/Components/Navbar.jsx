
import { useContext } from "react";
import { Link } from "react-router-dom";
import  { authContext } from "../Provider/AuthProvider";
import userImage from "../assets/user.png"

export default function Navbar() {
    const {user,logOut}=useContext(authContext)
    return (
        <div>
            <div className="navbar h-10 sticky z-50 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <Link to='/about'>About</Link>
                            <Link to='/user'>UpdateUser</Link>
                            <Link to="/">Home</Link>
                        </ul>
                    </div>
                    <a className="font-semibold text-xl">Eco Ad<span className="text-indigo-500">vent</span>ures</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        <Link className="px-4 py-2 rounded-lg hover:border-2 hover:border-blue-500" to="/">Home</Link>
                        <Link className="px-4 py-2 rounded-lg hover:border-2 hover:border-blue-500" to='/about'>About</Link>
                        <Link className="px-4 py-2 rounded-lg hover:border-2 hover:border-blue-500" to='/user'>UpdateUser</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="">
                        {
                            user && user.email? 
                            <div className="mr-2 flex gap-2">
                                {/* <p>{user?.displayName}</p> */}
                                <img  className=" w-10 rounded-full" src={user?.photoURL} alt="" />
                            </div> :
                            <img className="mr-2" src={userImage} alt="" />
                            
                        }
                    </div>
                    {
                        user && user.email ?<button onClick={logOut}className="px-6 p-2 border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white">Log-Out</button>: <Link className="px-6 p-2 border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white" to={`auth/login`}>Login</Link>
                    }
                   
                </div>
            </div>
        </div>
    )
}
