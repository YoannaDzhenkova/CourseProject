import { useContext } from "react";
import reviewsApi from "../../api/reviewsApi"
import { ReviewsContext } from "../../contexts/ReviewsContext";
import { UserContext } from "../../contexts/UserContext";

export default function CreateReview({
    onCreate
}) {
    const { email } = useContext(UserContext);
    const {serviceId} = useContext(ReviewsContext)
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