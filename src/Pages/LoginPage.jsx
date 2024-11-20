import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";


export default function LoginPage() {

    const {loginUser,setUser}=useContext(authContext)

const handleSubmit=(e)=>{
    e.preventDefault()
    const from=e.target;
    const email=from.email.value;
    const password=from.password.value;
    console.log({email,password})

    loginUser(email,password)
    .then(result=>{
        const user=result.user;
        setUser(user)
        toast.success('Successfully Login!');
    })
    .catch(error=>{
        toast.error('This is an error!',error.code);
    })
}


    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-xl font-semibold text-center">Login Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                        name="email"
                        type="email" 
                        placeholder="email" 
                        className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input 
                        name="password"
                        type="password" 
                        placeholder="password" 
                        className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Don’t Have An Account ?<Link className="text-red-600" to="/auth/register">Register</Link></p>
                </form>
            </div>
        </div>
    )
}
