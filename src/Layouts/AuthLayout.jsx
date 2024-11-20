import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


export default function AuthLayout() {
    return (
        <div>

            <header>
                <Navbar></Navbar>
            </header>

            <Outlet></Outlet>

        </div>
    )
}
