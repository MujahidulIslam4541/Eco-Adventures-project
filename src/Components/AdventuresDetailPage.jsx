import { Link, useLoaderData, useParams } from "react-router-dom"
import { FaArrowAltCircleLeft } from "react-icons/fa";



export default function AdventuresDetailPage() {

    const { id } = useParams()
    const Id = parseInt(id)

    const data = useLoaderData()


    const adventures = data.find(adventures => adventures.id == Id)
    const {
        adventureTitle,
        image,
        // categoryName,
        shortDescription,
        adventureCost,
        bookingAvailability,
        location,
        duration,
        adventureLevel,
        includedItems,
        ecoFriendlyFeatures,
        specialInstructions,
        maxGroupSize


    } = adventures;

    return (
        <div>
            <div className="hero border shadow-md rounded-2xl my-10 min-h-screen">
                <div className="hero-content  flex-col lg:flex-row">
                    <div className="lg:w-1/2 h-full">
                        <img
                            src={image}
                            className="w-full md:max-w-md rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-blue-500">{adventureTitle}</h1>
                        <p className="py-4 font-semibold">{shortDescription}</p>
                        <div className="space-y-2 mb-3">
                            <div className=" block md:flex md:justify-between">
                                <p>Adventures Cost: <span className="font-bold text-indigo-500">{adventureCost}$ </span></p>
                                <p>Adventures level: <span className="font-semibold">{adventureLevel}</span></p>
                            </div>
                            <p>{bookingAvailability}</p>
                            <p>Location: <span className="font-bold">{location}</span></p>
                            <p>Duration: <span className="font-bold">{duration}</span></p>
                            <p>Max Group Size: {maxGroupSize}</p>
                        </div>

                        <hr />
                        <h2 className="font-semibold mt-4">Included Items:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 py-2 border-b-2 border-dashed border-blue-400">
                            {
                                includedItems.map((item, index) => <li key={index}>{item}</li>)
                            }
                        </div>


                        <h2 className="font-semibold mt-4">Eco-Friendly Features:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 pb-5 border-b-2 border-dashed border-blue-400 ">
                            {
                                ecoFriendlyFeatures.map((feature, index) => <li key={index}>{feature}</li>)
                            }
                        </div>

                        <hr />
                        <h2 className="font-semibold mt-4">Special Instructions:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                            {
                                specialInstructions.map((instruction, index) => <li key={index}>{instruction}</li>)
                            }
                        </div>
                        <Link to="/" className="btn border-2 border-blue-500 rounded-lg"> <span className="text-2xl"><FaArrowAltCircleLeft></FaArrowAltCircleLeft></span>Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
