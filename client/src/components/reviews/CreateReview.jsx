
export default function CreateReview() {
    
    return (
        <>
            <article className="create-review">
                <label>Add new review:</label>
                <form className="form">
                    <textarea name="review" placeholder="Review......"></textarea>
                    <input className="btn submit review" type="submit" value="Add Review" />
                </form>
            </article>
        </>
    )
}