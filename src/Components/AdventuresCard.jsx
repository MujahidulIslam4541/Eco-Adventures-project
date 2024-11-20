/* eslint-disable react/prop-types */


export default function AdventuresCard({ data }) {
    const {
        adventureTitle,
        Image,
        adventureLevel,

    } = data;
    return (
        <div>

            <div className="card bg-base-100 border-2">
                <figure className="px-10 pt-10">
                    <img
                        src={Image}
                        alt={adventureTitle}
                        className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{adventureTitle}</h2>
                    <p> Adventures Label: {adventureLevel}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
