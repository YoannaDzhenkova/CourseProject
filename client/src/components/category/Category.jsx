import { useEffect, useState } from "react";
import { useParams } from "react-router"
import servicesApi from "../../api/servicesApi";
import CategoryItem from "./CategoryItem";

export default function Category() {
    const { category } = useParams();

    const [services, setServices] = useState([]);

    useEffect(() => {
        servicesApi.getAll()
            .then(setServices)
    }, [])

    const neededItems = services.filter(service => service.category === category);


    return (
        <>
            <section id="services">
                <div className="services">

                    <div className="all-services">
                        <h1>{category}</h1>
                        <ul>
                            {neededItems.length > 0
                                ? neededItems.map(service => (
                                    <CategoryItem
                                        key={service._id}
                                        category={service.category}
                                        {...service} />
                                ))
                                : <h3 className="no-articles">No services yet!</h3>
                            }

                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}