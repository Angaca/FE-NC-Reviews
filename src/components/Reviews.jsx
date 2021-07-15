import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then(({ data }) => setReviews(data.reviews));
  }, []);

  return (
    <div className="content">
      <ul>
        {reviews.map((review) => {
          return (
            <div className="section container">
              <li key={review.review_id}>
                <Link to={`Reviews/${review.review_id}`}>
                  <h4>{review.title}</h4>
                  <h6>Preview ⬇️</h6>
                  <p>{review.review_body.slice(0, 70)}...</p>
                  <p>Current votes: {review.votes}</p>
                  <p>Current comments: {review.comment_count}</p>
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
