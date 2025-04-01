import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import servicesApi from "../../api/servicesApi";
import reviewsApi from "../../api/reviewsApi";
import ShowReviews from "../reviews/ShowReviews";
import CreateReview from "../reviews/CreateReview";
import { UserContext } from "../../contexts/UserContext";

export default function Details() {
    const { email } = useContext(UserContext);
    const [service, setService] = useState({});
    const [reviews, setReviews] = useState([]);
    const { serviceId } = useParams();
    const navigate = useNavigate()

    useEffect(() => {

        servicesApi.getOne(serviceId)
            .then(setService);
        reviewsApi.getAll(serviceId)
            .then(setReviews)

    }, [serviceId]);

    const onDelete = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${service.title} service?`);

        if (!hasConfirm) {
            return;
        }

        await servicesApi.delete(serviceId);

        navigate('/services')
    }

    const createReview = (newReview) => {
        setReviews(state => [...state, newReview]);
    }


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

                        <ShowReviews reviews={reviews} />

                        <div className="buttons">
                            <Link to={`/services/${serviceId}/edit`} className="button">Edit</Link>
                            <button onClick={onDelete} className="button">Delete</button>
                        </div>
                    </div>

                    <CreateReview
                        email={email}
                        serviceId={serviceId}
                        onCreate={ createReview} 
                    />

                </section>
            </div>
        </>
    )
}