import { Link } from "react-router";

export default function CategoryItem({
    _id,
    title,
    category,
    imageUrl
}) {

    return (
        <>

            <li>
                <img src={imageUrl} alt={title} />
                <h3>{title}</h3>
                <Link to={`/services/${_id}/details`} className="details-button">Details</Link>
            </li>
        </>
    )
}