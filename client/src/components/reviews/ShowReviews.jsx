export default function ShowReviews({
    reviews,
}) {

    return (
        <>
            <div className="details-review">
                <h2>Review:</h2>
                <ul>
                    {reviews.length > 0
                        ? reviews.map(review => (
                            <li key={review._id} className="review">
                                <p>{review.email}: {review.review}</p>
                            </li>
                        ))
                        : <p className="no-review">No reviews.</p>}
                </ul>

            </div>
        </>
    )
}