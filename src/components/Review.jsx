import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReview, patchReviews } from "../api";
import useVote from "../hooks/useVote";
import { capFirstLetter } from "../utils";
import Comments from "./Comments";
import EditReview from "./EditReview";

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [edited, setEdited] = useState(false);
  const [edit, setEdit] = useState(false);
  const [reviewBody, setReviewBody] = useState(review.review_body);
  const { votes, incrementVote } = useVote(review.votes);

  const handleVote = () => {
    incrementVote();
    patchReviews(review.review_id, 1);
  };

  useEffect(() => {
    getReview(review_id).then(({ data }) => {
      setReview(data.review);
      setReviewBody(data.review.review_body);
    });
  }, [review_id, edit, edited]);

  return (
    <div className="content section container">
      {edited ? (
        <div className="notification is-success is-light">
          <button className="delete" onClick={() => setEdited(false)}></button>
          <Link to="/Users">Successfully Edited</Link>
        </div>
      ) : null}
      <div className="has-text-centered">
        <h3 className="title is-size-3">{review.title}</h3>
        <div className="columns">
          <div className="column">
            <figure className="image">
              <img src={review.review_img_url} alt="Review" />
            </figure>
            <p className="is-size-6 is-italic my-3">
              {votes} votes and {review.comment_count} comments
            </p>
          </div>
          <div className="column">
            <p>
              <em>Review by</em> <b>{review.owner}</b>
            </p>
            <h5>{review.review_body}</h5>
            <p className="is-size-6 my-3">
              <em>Category: </em>
              {capFirstLetter(review.category)}
            </p>
            <p className="is-size-6 my-3">
              <em>Game designer: </em>
              {capFirstLetter(review.designer)}
            </p>
          </div>
        </div>
        <h4>Comments</h4>
        <button className="button is-info mr-2" onClick={() => setEdit(true)}>
          Edit
        </button>
        <button className="button is-info mr-2" onClick={() => handleVote()}>
          Vote
        </button>
        <button className="button is-info">Add a Comment</button>
      </div>
      <Comments review_id={review_id} />
      {/* modal */}
      <div className={`modal ${edit ? "is-active" : null}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Edit review</p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => setEdit(false)}
            ></button>
          </header>
          <section className="modal-card-body">
            <EditReview reviewBody={reviewBody} setReviewBody={setReviewBody} />
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-success"
              onClick={() => {
                patchReviews(review.review_id, 0, reviewBody);
                setEdit(false);
                setEdited(true);
              }}
            >
              Save changes
            </button>
            <button className="button" onClick={() => setEdit(false)}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
      {/* modal end */}
    </div>
  );
};

export default Review;
