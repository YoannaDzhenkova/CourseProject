import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import servicesApi from "../../api/servicesApi";

export default function Edit() {
    const {serviceId} = useParams();
    const navigate = useNavigate();

    const [service, setService] = useState({});

    useEffect(() => {
        servicesApi.getOne(serviceId)
            .then(setService)
    }, []);

    const formAction = async (formdata) => {
        const serviceData = Object.fromEntries(formdata);

        await servicesApi.edit(serviceId,serviceData);

        navigate(`/services/${serviceId}/details`)
    }

    return (
        <>
            <div className="create">
                <section id="edit-page">
                    <form action={formAction} id="edit">
                        <div className="container">

                            <h1>Edit Service</h1>
                            <label htmlFor="service-title">Service title:</label>
                            <input type="text" id="title" name="title" defaultValue={service.title} />

                            <label htmlFor="category">Category:</label>
                            <input type="text" id="category" name="category" defaultValue={service.category} />

                            <label htmlFor="service-img">Image:</label>
                            <input type="text" id="imageUrl" name="imageUrl" defaultValue={service.imageUrl} />

                            <label htmlFor="summary">Summary:</label>
                            <textarea name="summary" id="summary" defaultValue={service.summary}></textarea>
                            <input className="btn submit" type="submit" value="Edit Game" />

                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}