import servicesApi from "../../api/servicesApi";
import { useNavigate } from 'react-router';

export default function Create() {
    const navigate = useNavigate();

    const submitAction = async (formData) => {
        const data = Object.fromEntries(formData);

        const result = await servicesApi.create(data);

        navigate('/services')

    }
    return (
        <>
            <div className="create">
                <section id="create-page">
                    <form id="create" action={submitAction}>
                        <div className="container">

                            <h1>Create Service</h1>

                            <div className="form-group">
                                <label htmlFor="leg-title">Service Title:</label>
                                <input type="text" id="title" name="title" placeholder="Enter service title..." />
                            </div>

                            <div className="form-group">
                                <label htmlFor="category">Category:</label>
                                <select id="category" name="category">
                                    <option defaultValue="Trainings">Trainings</option>
                                    <option defaultValue="Massages">Massages</option>
                                    <option defaultValue="Spa zone">Spa zone</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="game-img">Image:</label>
                                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />
                            </div>

                            <div className="form-group">
                                <label htmlFor="summary">Summary:</label>
                                <textarea name="summary" id="summary"></textarea>
                            </div>
                        </div>
                        <input className="btn-submit" type="submit" defaultValue="Create Service" />
                    </form>
                </section>
            </div>
        </>
    )
}