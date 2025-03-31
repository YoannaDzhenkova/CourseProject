import { Link } from "react-router";
import About from "./About";
import Contacts from "./Contacts";
export default function Home() {

    return (
        <>
            <div className="new-services">
                <h1>Services</h1>
                <ul>
                    <li>
                        <h3>Trainings</h3>
                        <img src="images/gym.jpg" alt="Training" />
                        <Link to="services/Trainings"><button>Show more</button></Link>
                    </li>
                    <li>
                        <h3>Spa Zone</h3>
                        <img src="https://fitnessline.bg/images/media/fitness_crio/2/Fitnessline%20(403%20of%20461).jpg" alt="" />
                        <Link to="services/Spa zone"><button>Show more</button></Link>
                    </li>
                    <li>
                        <h3>Massages</h3>
                        <img src="images/massage.jpg" alt="Massages" />
                        <Link to="services/Massages"><button>Show more</button></Link>
                    </li>
                </ul>
            </div>

            <About />
            <Contacts />
        </>
    )
}