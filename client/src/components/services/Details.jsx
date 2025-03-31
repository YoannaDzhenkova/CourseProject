import { Link } from "react-router";

import ShowReviews from "../reviews/ShowReviews";
import CreateReview from "../reviews/CreateReview";

export default function Details() {

    return (
        <>
            <div className="details">
                <section id="details">
                    <h1>Service Details</h1>
                    <div className="info-section">

                        <div className="service-header">
                            <img className="service-img" src='' />
                            <h1>Title</h1>
                            <p className="type">Category</p>
                        </div>

                        <p className="text">Summary</p>

                        <ShowReviews />

                        <div className="buttons">
                            <Link to={'/services/serviceId/edit'} className="button">Edit</Link>
                            <button className="button">Delete</button>
                        </div>
                    </div>

                    <CreateReview/>

                </section>
            </div>
        </>
    )
}