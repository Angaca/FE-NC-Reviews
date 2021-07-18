import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMostVotedReview, patchReviews } from "../api";
import { UserContext } from "../contexts/User";
import useVote from "../hooks/useVote";
import Comments from "./Comments";
import reviewImg from "../asset/ReviewWriter.jpg";

const MostVoted = () => {
  const [topVoted, setTopVoted] = useState({});
  const [loaded, setLoaded] = useState(false);
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

  if (Object.keys(topVoted).length === 0 || !loaded) {
    return (
      <div className="section">
        <div className="container has-text-centered">
          <button className="button large is-loading is-info">Loading</button>
          <div className="is-hidden">
            <Comments setLoaded={setLoaded} review_id={topVoted.review_id} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="section">
        <div className="container">
          <h2 className="is-size-2 has-text-centered my-4">
            Current Top Voted Review
          </h2>
          <div className="tile is-ancestor">
            <div className="tile is-parent is-vertical">
              <div className="tile is-child">
                <div className="card">
                  <div className="card-header">
                    <div className="card-header-title">
                      <h1 className="is-size-1 title">{topVoted.title} </h1>
                    </div>
                  </div>
                  <div className="card-content">
                    <p className="has-text-justified is-size-4">
                      {topVoted.review_body}
                    </p>
                    <h3 className="is-size-5 subtitle mt-4">
                      <em> Review by</em> {topVoted.owner}
                    </h3>
                  </div>
                  <div className="card-footer">
                    <div className="card-footer-item">
                      <p className="is-size-5">{votes} Current Votes</p>
                      {user ? (
                        <button
                          className="button is-info ml-3"
                          onClick={() => handleVote()}
                        >
                          Vote
                        </button>
                      ) : (
                        <Link to="/Users">
                          <button className="button is-info ml-3">Vote</button>
                        </Link>
                      )}
                    </div>
                    <div className="card-footer-item">
                      <Link to={`/Reviews/${topVoted.review_id}`}>
                        <p className="is-size-5">See full details</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile is-child is-hidden-touch">
                <img src={reviewImg} alt="Writer" />
              </div>
            </div>
            <div className="tile is-5 is-vertical is-parent">
              <div className="tile is-child">
                <img src={topVoted.review_img_url} alt="Game" />
              </div>
              <div className="tile is-child">
                <p className="is-size-4 title">Comments</p>
                <div className="has-text-centered">
                  {/* <button
                className="button is-success mx-2"
                onClick={user ? null : () => setAlert(true)}
                >
                Add a Comment
              </button> */}
                </div>
                <Comments
                  setLoaded={setLoaded}
                  review_id={topVoted.review_id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MostVoted;
