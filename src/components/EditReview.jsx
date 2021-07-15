const EditReview = ({ reviewBody, setReviewBody }) => {
  return (
    <div>
      <label htmlFor="review"></label>
      <textarea
        className="textarea is-info"
        onChange={(event) => setReviewBody(event.target.value)}
        name="review"
        id="review"
        value={reviewBody}
      ></textarea>
    </div>
  );
};

export default EditReview;
