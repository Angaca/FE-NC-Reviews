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
      <h4>{review.title}</h4>
      <img src={review.review_img_url} alt="Review" />
      <p>{review.review_body}</p>
      <p>Author: {review.owner}</p>
      <Comments />
    </div>
  );
};

export default Review;
