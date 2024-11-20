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
        <div className="my-8 text-center">
          <h2 className="text-xl font-bold">Discover Hidden Gems of the Wilderness</h2>
          <p>Uncover the untouched beauty of nature with hidden trails, serene landscapes, and breathtaking spots waiting to be explored. Venture off the beaten path to experience the wilderness in its purest and most magical form, perfect for adventurers and nature lovers alike.</p>
        </div>
        <Outlet></Outlet>
      </section>



      {/* footer section */}
      <Footer></Footer>
    </div>
  )
}

