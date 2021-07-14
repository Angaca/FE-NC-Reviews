import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReview, patchComment } from "../api";
import { Link } from "react-router-dom";

const EditReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [reviewBody, setReviewBody] = useState("");

  useEffect(() => {
    getReview(review_id).then(({ data }) => setReview(data.review));
  }, [review_id]);

  useEffect(() => {
    setReviewBody("DIOPORCO");
  }, []);

  console.log(review.review_body);

  return (
    <div className="EditReview">
      <label htmlFor="review">
        <h3>Edit Review:</h3>
      </label>
      <textarea
        // onChange={() => setReviewBody(review.review_body)}
        name="review"
        id="review"
        cols="40"
        rows="20"
      >
        {reviewBody}
      </textarea>
      <div>
        <Link to={`/Reviews/${review.review_id}`}>
          {/* <button onClick={patchComment(review.review_id,0,review.review_body)}>Edit</button> */}
        </Link>
      </div>
    </div>
  );
};

export default EditReview;
