import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import servicesApi from "../../api/servicesApi";
import ShowReviews from "../reviews/ShowReviews";
import CreateReview from "../reviews/CreateReview";

export default function Details({
    email,
}) {
    const [service, setService] = useState({});
    const { serviceId } = useParams();
    const navigate = useNavigate()

    useEffect(() => {

        servicesApi.getOne(serviceId)
            .then(setService);
        

    }, [serviceId]);


    return (
        <>
            <div className="details">
                <section id="details">
                    <h1>Service Details</h1>
                    <div className="info-section">

                        <div className="service-header">
                            <img className="service-img" src={service.imageUrl} />
                            <h1>{service.title}</h1>
                            <p className="type">{service.category}</p>
                        </div>

                        <p className="text">{service.summary}</p>

                        <ShowReviews />

                        <div className="buttons">
                            <Link to={`/services/${serviceId}/edit`} className="button">Edit</Link>
                            <button className="button">Delete</button>
                        </div>
                    </div>

                    <CreateReview/>

                </section>
            </div>
        </>
    )
}