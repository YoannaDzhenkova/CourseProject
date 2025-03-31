import ServiceItem from "./ServiceItem";

export default function Services() {
    return (
        <>
            <section id="services">
                <div className="services">

                    <div className="all-services">
                        <h1>All Services</h1>
                        <ul>
                            <ServiceItem />
                            
                            <h3 className="no-articles">No services yet!</h3>
                            
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}