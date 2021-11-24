import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReview, patchReviews } from "../api";
import { UserContext } from "../contexts/User";
import useVote from "../hooks/useVote";
import { capFirstLetter } from "../utils";
import Comments from "./Comments";
import EditReview from "./EditReview";
import Success from "./Success";

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [edited, setEdited] = useState(false);
  const [edit, setEdit] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [voted, setVoted] = useState(false);
  const { votes, incrementVote } = useVote(review.votes);
  const { user } = useContext(UserContext);

  const handleVote = () => {
    incrementVote();
    setVoted(true);
    patchReviews(review.review_id, 1);
  };

  useEffect(() => {
    getReview(review_id).then(({ data }) => {
      setReview(data.review);
    });
  }, [review_id, edit, edited]);

  if (Object.keys(review).length === 0 || !loaded) {
    return (
      <div className="section">
        <div className="container has-text-centered">
          <button className="button large is-loading is-info">Loading</button>
          <div className="is-hidden">
            <Comments setLoaded={setLoaded} review_id={review.review_id} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="content section container">
        {edited ? <Success setEdited={setEdited} /> : null}
        <div className="has-text-centered">
          <h3 className="title is-size-3">{review.title}</h3>
          <div className="columns is-vcentered">
            <div className="column">
              <figure className="image">
                <img src={review.review_img_url} alt="Review" />
              </figure>
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
          <p className="is-size-6 is-italic my-3">
            {votes} votes and {review.comment_count} comments
          </p>
          {user ? (
            <>
              {user.username === review.owner ? (
                <button
                  className="button is-success mx-2 mt-2"
                  onClick={() => setEdit(true)}
                >
                  Edit
                </button>
              ) : (
                <button
                  className="button is-info mx-2 mt-2"
                  disabled={voted}
                  onClick={() => handleVote()}
                >
                  Vote
                </button>
              )}
              {/* <button className="button is-success mx-1 mt-2">
                Add a Comment
              </button> */}
              {null}
            </>
          ) : (
            <Link to="/Users">
              <button className="button is-info mx-2 mt-2">Log In</button>
            </Link>
          )}
        </div>
        <h4 className="ml-4">Comments</h4>
        <Comments setLoaded={setLoaded} review_id={review_id} />
        <EditReview
          setEdit={setEdit}
          edit={edit}
          setEdited={setEdited}
          review={review}
        />
      </div>
    );
  }
};

export default Review;
