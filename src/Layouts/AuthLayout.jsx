import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


export default function AuthLayout() {
    return (
        <div>

            {/* Navbar section */}
            <header>
                <Navbar></Navbar>
            </header>

            {/* Dynamic section */}
            <Outlet></Outlet>

            {/* footer section */}
            <Footer></Footer>
        </div>
    )
}
