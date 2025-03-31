import { useEffect, useState } from "react";
import servicesApi from "../../api/servicesApi";
import ServiceItem from "./ServiceItem";

export default function Services() {
    const [services,setServices] = useState([]);
    useEffect(() => {
        servicesApi.getAll()
            .then(setServices)
    }, [])
    return (
        <>
            <section id="services">
                <div className="services">

                    <div className="all-services">
                        <h1>All Services</h1>
                        <ul>
                            {services.length > 0 
                                ? services.map(service => 
                                <ServiceItem 
                                    key={service._id}
                                    {...service}/>)
                                : <h3 className="no-articles">No services yet!</h3>
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}