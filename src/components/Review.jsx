import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const { votes, incrementVote } = useVote(review.votes);

  const handleVote = () => {
    incrementVote();
    patchReviews(review.review_id, 1);
  };

  useEffect(() => {
    getReview(review_id).then(({ data }) => {
      setReview(data.review);
    });
  }, [review_id, review]);

  return (
    <div className="content section container">
      {edited ? (
        <div className="notification is-success is-light">
          <button className="delete" onClick={() => setEdited(false)}></button>
          <p>Successfully Edited</p>
        </div>
      ) : null}
      <div className="has-text-centered">
        <h3 className="title is-size-3">{review.title}</h3>
        <div className="columns is-vcentered">
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
            <p className="is-size-5">{review.review_body}</p>
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
        <button
          className="button is-info mx-1 mt-2"
          onClick={() => setEdit(true)}
        >
          Edit
        </button>
        <button
          className="button is-info mx-2 mt-2"
          onClick={() => handleVote()}
        >
          Vote
        </button>
        <button className="button is-info mx-1 mt-2">Add a Comment</button>
      </div>
      <Comments review_id={review_id} />
      <EditReview
        setEdit={setEdit}
        edit={edit}
        setEdited={setEdited}
        review={review}
      />
    </div>
  );
};

export default Review;
