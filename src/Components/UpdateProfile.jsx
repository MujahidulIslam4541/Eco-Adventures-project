
import Navbar from "./Navbar";
export default function UpdateProfile() {

    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>

            <div className="min-h-screen flex justify-center items-center animate__animated animate__backInUp">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border">
                    <h2 className="text-xl pt-4 text-center font-semibold">User Update Profile</h2>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name="name"
                                type="text" placeholder="Update Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                name="photo"
                                type="text" placeholder="PhotoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Your Profile</button>
                        </div>
                    </form>
                </div>



            </div>

        </div>
    )
}
