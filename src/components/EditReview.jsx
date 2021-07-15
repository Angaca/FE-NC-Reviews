import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReview, patchReviews } from "../api";
import { Link } from "react-router-dom";

const EditReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [reviewBody, setReviewBody] = useState(review.review_body);

  useEffect(() => {
    getReview(review_id).then(({ data }) => {
      setReview(data.review);
      setReviewBody(data.review.review_body);
    });
  }, [review_id]);

  return (
    <div className="EditReview">
      <label htmlFor="review">
        <h3>Edit Review:</h3>
      </label>
      <textarea
        onChange={(event) => setReviewBody(event.target.value)}
        name="review"
        id="review"
        cols="40"
        rows="20"
        value={reviewBody}
      ></textarea>
      <div>
        <Link to={`/Reviews/${review.review_id}`}>
          <div class="notification is-success">
            <button
              onClick={() => {
                patchReviews(review.review_id, 0, reviewBody);
              }}
            >
              Edit
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EditReview;
