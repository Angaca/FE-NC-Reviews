import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReview, patchReviews } from "../api";
import useVote from "../hooks/useVote";
import Comments from "./Comments";

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const { votes, incrementVote } = useVote(review.votes);

  const handleVote = () => {
    incrementVote();
    patchReviews(review.review_id, 1);
  };

  useEffect(() => {
    getReview(review_id).then(({ data }) => setReview(data.review));
  }, [review_id, review.review_body]);

  return (
    <div className="content section container">
      <div className="has-text-centered">
        <h3>{review.title}</h3>
        <img src={review.review_img_url} alt="Review" />
        <p>{review.review_body}</p>
        <p>
          <em>Review by</em> <b>{review.owner}</b>
        </p>
        <Link to={`/Edit/${review.review_id}`}>
          <button className="button">Edit</button>
        </Link>
        <p>Votes: {votes}</p>
        <button className="button" onClick={() => handleVote()}>
          Vote
        </button>
      </div>
      <div>
        <Comments review_id={review_id} />
      </div>
    </div>
  );
};

export default Review;
