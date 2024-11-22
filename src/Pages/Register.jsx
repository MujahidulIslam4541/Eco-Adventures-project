import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";



export default function Register() {
    const navigate = useNavigate()
    const { createNewUser, setUser, updateUserProfile } = useContext(authContext)


    const handleSubmit = (event) => {
        event.preventDefault()
        const from = event.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;
        // console.log({ name, photo, email, password });

        

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                // console.log(user)
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/')
                        toast.success('Register Successful');
                    })
                    .catch(error => {
                        toast.error('Invalid Email or Password', error.code);
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }


    const provider = new GoogleAuthProvider()

    const auth = getAuth()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate('/')
                toast.success('Successfully Register With Google!');

            })
    }




    return (
        <div className="flex justify-center items-center min-h-screen animate__animated animate__pulse">
            <div className="card bg-slate-200 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-xl font-semibold  mt-5 text-center">Register Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="input input-bordered bg-transparent" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input
                            name="photo"
                            type="text"
                            placeholder="Photo URL"
                            className="input input-bordered bg-transparent" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered bg-transparent" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            className="input input-bordered bg-transparent" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-blue-500 text-white hover:bg-blue-400">Register</button>
                    </div>
                    <p>Already Have An Account? <Link className="text-red-600" to={`/auth/login`}>Login</Link></p>

                    <div className="divider">Or</div>
                    <button onClick={handleGoogleSignIn} className="btn border-2 border-blue-500"> <span className="text-2xl"><FcGoogle></FcGoogle></span>Register With Google</button>
                </form>
            </div>
        </div>
    )
}
