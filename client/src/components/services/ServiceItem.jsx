import { Link } from "react-router";

export default function ServiceItem() {

    return (
        <>
            <li>
                <img src='' alt='' />
                <h3>Title</h3>
                <h6>Cateogory</h6>
                <Link to={'/services/serviceId/details'} className="details-button">Details</Link>
            </li>
        </>
    )
}