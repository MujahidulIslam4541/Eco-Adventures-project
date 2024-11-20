import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


export default function MainLayoutes() {
  return (
    <div>
      <section className="w-11/12 mx-auto">
        {/* Navbar section */}
        <Navbar></Navbar>
      </section>

      <section className="w-11/12 mx-auto">
        {/* Banner section */}
        <Banner></Banner>
      </section>

      <section className="w-11/12 mx-auto">
        {/* Main section */}
        <Outlet></Outlet>
      </section>



      {/* footer section */}
      <Footer></Footer>
    </div>
  )
}

