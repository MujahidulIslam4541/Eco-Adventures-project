
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { GiHiking } from "react-icons/gi";
import { FaLocationPinLock } from "react-icons/fa6";
export default function Support() {
  return (
    <div className="animate__animated animate__fadeInDown" >
      <div className="my-10 space-y-2 ">
        <h2 className="text-2xl text-center font-semibold  text-orange-500">Support And Assistance</h2>
        <p className="w-9/12 mx-auto text-center text-slate-500 ">We provide dedicated support and assistance to ensure your experience is smooth and worry-free. Our team is always ready to guide you, answer your queries, and address your needs promptly, ensuring your satisfaction and safety every step of the way.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">

        <div className=" hover:bg-slate-300 transition ease-in-out delay-150 border rounded-lg  shadow-md p-4">
          <div className="flex flex-col justify-center items-center">
            <AiTwotoneSafetyCertificate className="text-5xl"></AiTwotoneSafetyCertificate>
          </div>
          <h2 className="text-xl font-semibold my-2 text-blue-500">Safe Adventure</h2>
          <p>We bring you an amazing experience of safe adventures! With us, you can enjoy thrilling and exciting adventure activities where your safety is our top priority. By following proper guidelines, using high-quality equipment, and with the assistance of experienced trainers, we ensure that every moment of your journey is safe and memorable. Come, join us, and explore new experiences with complete peace of mind!</p>
        </div>
        <div className="hover:bg-slate-300 transition ease-in-out delay-150 border rounded-lg shadow-md p-4">
          <div className="flex justify-center items-center text-5xl"><GiHiking></GiHiking></div>
          <h2 className="text-xl font-semibold my-2 text-blue-500">Professional Hikers</h2>
          <p>We have a team of experienced and professional hikers who are ready to offer you a safe and enjoyable adventure. Our professional hikers are skilled in navigating mountain trails, challenging paths, and remote destinations. They provide accurate guidelines and valuable tips to make your journey easier and more enjoyable. Their expertise ensures that you can explore new places with complete safety.</p>
        </div>
        <div className="hover:bg-slate-300 transition ease-in-out delay-150 border rounded-lg shadow-md p-4">
          <div className="text-5xl flex justify-center items-center "><FaLocationPinLock></FaLocationPinLock></div>
          <h2 className="text-xl font-semibold my-2 text-blue-500">Secret Location</h2>
          <p>We will take you to a secret location where the beauty of nature and serenity come together in perfect harmony. The thrill of reaching this special destination and the hidden wonders around it will make your experience even more exciting. With the guidance of our expert team, you’ll discover a place that remains untouched by regular tourists. Join us to unveil the mysteries of this exclusive and secret destination, where every moment will be unique and unforgettable!</p>
        </div>
      </div>

    </div>
  )
}
