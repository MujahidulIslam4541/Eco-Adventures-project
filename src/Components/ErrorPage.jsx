
import { FaArrowAltCircleLeft, FaExclamationTriangle } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-lg">
        <FaExclamationTriangle className="text-yellow-500 text-6xl mb-6 mx-auto" />
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Oops! Something Went Wrong</h1>
        <p className="text-lg text-gray-600 mb-6">
          We couldnt find the page youre looking for. Please check the URL or try again later.
        </p>
        <div>
          <Link to="/" className="btn mr-2 border-2 border-blue-500 rounded-lg"> <span className="text-2xl"><FaArrowAltCircleLeft></FaArrowAltCircleLeft></span>Back To Home</Link>

          <button className="btn mr-2 border-2 border-blue-500 rounded-lg"><span className="text-2xl"><FiPhoneCall /></span> Contact Support</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
