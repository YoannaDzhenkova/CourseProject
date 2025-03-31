
export default function Edit() {
    return (
        <>
            <div className="create">
                <section id="edit-page">
                    <form id="edit">
                        <div className="container">

                            <h1>Edit Service</h1>
                            <label htmlFor="service-title">Service title:</label>
                            <input type="text" id="title" name="title" defaultValue="" />

                            <label htmlFor="category">Category:</label>
                            <input type="text" id="category" name="category" defaultValue="" />

                            <label htmlFor="service-img">Image:</label>
                            <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />

                            <label htmlFor="summary">Summary:</label>
                            <textarea name="summary" id="summary" defaultValue=""></textarea>
                            <input className="btn submit" type="submit" value="Edit Game" />

                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}