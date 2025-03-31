import reviewsApi from "../../api/reviewsApi"

export default function CreateReview({
    email,
    serviceId,
    onCreate
}) {
    const reviewAction = async (formData) => {
        const review = formData.get('review')

        const createdReview = await reviewsApi.create(email, serviceId, review);
        
        onCreate(createdReview)        
    }
    return (
        <>
            <article className="create-review">
                <label>Add new review:</label>
                <form action={reviewAction} className="form">
                    <textarea name="review" placeholder="Review......"></textarea>
                    <input className="btn submit review" type="submit" value="Add Review" />
                </form>
            </article>
        </>
    )
}