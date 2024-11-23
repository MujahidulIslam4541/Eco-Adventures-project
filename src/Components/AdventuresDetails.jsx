import AdventuresDetailPage from "./AdventuresDetailPage";
import Footer from "./Footer";
import Navbar from "./Navbar";


export default function AdventuresDetails() {
    return (
        <div>

            <section className="h-20">
                {/* navbar */}
                <Navbar></Navbar>
            </section>


           <section className="w-11/12 mx-auto">
             {/* adventures Detail page*/}
             <AdventuresDetailPage></AdventuresDetailPage>
           </section>



            {/* footer section */}
            <Footer></Footer>


        </div>
    )
}
