import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then(({ data }) => setReviews(data.reviews));
  }, []);

  return (
    <div className="Reviews">
      <ul>
        {reviews.map((review) => {
          return (
            <Link to={`Reviews/${review.review_id}`}>
              <li key={review.review_id}>
                <h4>{review.title}</h4>
                <p>{review.review_body}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
