/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


export default function AdventuresCard({ data }) {
    const {
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
                        <Link className="px-4 py-3 text-white rounded-full transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 ">Explore Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
