import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";


export default function Register() {
    const navigate =useNavigate()
    const { createNewUser,setUser,updateUserProfile } = useContext(authContext)


    const handleSubmit = (event) => {
        event.preventDefault()
        const from = event.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log({ name, photo, email, password });

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user)
                updateUserProfile({displayName:name,photoURL:photo})
                .then(()=>{
                    navigate('/')
                    toast.success('Register Successful');
                })
                .catch(error=>{
                    toast.error('Invalid Email or Password',error.code);
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }





    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-xl font-semibold text-center">Register Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input
                            name="photo"
                            type="text"
                            placeholder="Photo URL"
                            className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>Already Have An Account? <Link className="text-red-600" to={`/auth/login`}>Login</Link></p>
                </form>
            </div>
        </div>
    )
}
