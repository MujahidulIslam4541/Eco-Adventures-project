
import { FaLeaf, FaTree, FaMountain } from "react-icons/fa";
import Navbar from "./Navbar";

const About = () => {
    return (

        <div className="w-11/12 mx-auto">

            <Navbar></Navbar>


            <div className="bg-gray-50 py-12 px-6 animate__animated animate__backInUp">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl font-semibold text-green-600 mb-6">About Eco Adventures</h1>
                    <p className="text-lg text-gray-700 mb-12">
                        At Eco Adventures, we believe in exploring the world responsibly while embracing natures beauty.
                        Our mission is to offer sustainable travel experiences that connect adventurers with nature while
                        ensuring the preservation of the environment for future generations.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <FaLeaf className="text-4xl text-green-600 mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800">Sustainable Travel</h3>
                            <p className="text-gray-600 text-center">
                                Our tours are designed to minimize environmental impact while providing enriching experiences.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaTree className="text-4xl text-green-600 mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800">Nature Connection</h3>
                            <p className="text-gray-600 text-center">
                                Immerse yourself in the natural world, from lush forests to towering mountains, and discover
                                the incredible beauty our planet has to offer.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaMountain className="text-4xl text-green-600 mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800">Adventure Awaits</h3>
                            <p className="text-gray-600 text-center">
                                Whether hiking, trekking, or eco-tours, every adventure is an opportunity to create lifelong
                                memories while preserving the planet.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <button className="btn border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition ease-in-out delay-150">Join Our Next Adventure</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

