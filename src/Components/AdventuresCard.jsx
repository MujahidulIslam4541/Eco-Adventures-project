/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


export default function AdventuresCard({ data }) {
    const {
        id,
        adventureTitle,
        image,
        adventureLevel,
        location,
        categoryName
    } = data;
    return (
        <div>

            <div className="card card-compact  shadow-xl">
                <figure>
                    <img className="md:h-52"
                        src={image}
                        alt={adventureTitle} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{adventureTitle}</h2>
                    <p> Category Name: <span className="font-semibold">{categoryName}</span></p>
                    <p> Adventures Label: {adventureLevel}</p>
                    <p className="font-semibold text-base-800">{location}</p>
                    <div className="card-actions my-2">
                        <Link to={`/about/${id}`} className="btn bg-blue-500 text-white hover:bg-blue-400  ">Explore Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
