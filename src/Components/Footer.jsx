import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <footer className="footer bg-blue-400 rounded-md items-center p-4 mt-10">
                <aside className="flex justify-center items-center">
                    <h2 className="text-xl font-semibold">Eco Adventures</h2>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl">
                <Link><FaFacebook></FaFacebook></Link>
                <Link><FaInstagramSquare /></Link>
                <Link><FaTwitter></FaTwitter></Link>
                </nav>
            </footer>
        </div>
    )
}
