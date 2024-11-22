import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export default function LoginPage() {

    const { loginUser, setUser } = useContext(authContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    const handleSubmit = (e) => {
        e.preventDefault()
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log({ email, password })

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate(location?.state ? location.state : "/")
                toast.success('Successfully Login!');
            })
            .catch(error => {
                toast.error('Invalid Email or Password', error.code);
            })
    }

    const provider=new GoogleAuthProvider()

    const auth=getAuth()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                navigate('/')
                toast.success('Successfully Login With Google!',result);
               
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

                    <h2 className="text-center text-xl">Or</h2>
                    <button onClick={handleGoogleSignIn} className="btn">Login With Google</button>
                </form>

            </div>
        </div>
    )
}
