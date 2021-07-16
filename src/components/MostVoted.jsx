import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMostVotedReview, patchReviews } from "../api";
import { UserContext } from "../contexts/User";
import useVote from "../hooks/useVote";
import Comments from "./Comments";
import LoginAlert from "./LoginAlert";

const MostVoted = () => {
  const [topVoted, setTopVoted] = useState({});
  const [alert, setAlert] = useState(false);
  const { votes, incrementVote } = useVote(topVoted.votes);
  const { user } = useContext(UserContext);

  const handleVote = () => {
    incrementVote();
    patchReviews(topVoted.review_id, 1);
  };

  useEffect(() => {
    getMostVotedReview().then(({ data }) => {
      setTopVoted(data.reviews[0]);
    });
  }, []);

  return (
    <div className="section">
      <div className="container">
        {alert ? <LoginAlert setAlert={setAlert} alert={alert} /> : null}
        <h2 className="is-size-2 has-text-centered">
          Current Top Voted Review
        </h2>
        <div className="columns is-vcentered mt-3">
          <div className="column is-8 ">
            <div className="card">
              <div className="card-content">
                <h1 className="is-size-1 title">{topVoted.title} </h1>
                <h3 className="is-size-4 subtitle">
                  <em>by</em> {topVoted.owner}
                </h3>
                <p className="has-text-justified is-size-4">
                  {topVoted.review_body}
                </p>
              </div>
            </div>
            <div className="columns my-3 is-vcentered">
              <div className="column is-4">
                <p className="is-size-5">{votes} Current Votes</p>
              </div>
              <div className="column is-8">
                <button
                  className="button is-info"
                  onClick={user ? () => handleVote() : () => setAlert(true)}
                >
                  Vote
                </button>
              </div>
            </div>
            <Link to={user ? `/Reviews/${topVoted.review_id}` : "/Users"}>
              <p className="is-size-5">See full details</p>
            </Link>
          </div>
          <div className="column is-4">
            <p className="is-size-4 title">Comments</p>
            <div className="has-text-centered">
              {/* <button
                className="button is-success mx-2"
                onClick={user ? null : () => setAlert(true)}
              >
                Add a Comment
              </button> */}
            </div>
            <Comments review_id={topVoted.review_id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostVoted;
