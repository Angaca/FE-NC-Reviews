import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "../api";
import Comments from "./Comments";

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});

  useEffect(() => {
    getReview(review_id).then(({ data }) => setReview(data.review));
  }, [review_id]);

  return (
    <div className="Review">
      <h3>{review.title}</h3>
      <img src={review.review_img_url} alt="Review" />
      <p>{review.review_body}</p>
      <p>
        <em>Review by</em> <b>{review.owner}</b>
      </p>
      <Comments review_id={review_id} />
    </div>
  );
};

export default Review;
