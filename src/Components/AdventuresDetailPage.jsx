import { Link, useLoaderData, useParams } from "react-router-dom"


export default function AdventuresDetailPage() {

    const { id } = useParams()
    const Id = parseInt(id)

    const data = useLoaderData()


    const adventures = data.find(adventures => adventures.id == Id)
    const {
        adventureTitle,
        image,
        categoryName,
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
    console.log(adventures)

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{adventureTitle}</h1>
                        <p>{categoryName}</p>
                        <p className="py-6">{shortDescription}</p>
                        <p>{adventureCost}</p>
                        <p>{adventureLevel}</p>
                        <p>{bookingAvailability}</p>
                        <p>{location}</p>
                        <p>{duration}</p>
                        <p>{maxGroupSize}</p>

                        <div className="">
                            {
                              includedItems.map((item,index)=><p key={index}>{item}</p>)  
                            }
                        </div>

                        <div>
                            {
                                ecoFriendlyFeatures.map((feature,index)=><p key={index}>{feature}</p>)
                            }
                        </div>

                        <div>
                            {
                                specialInstructions.map((instruction,index)=><p key={index}>{instruction}</p>)
                            }
                        </div>
                        <Link to="/" className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
