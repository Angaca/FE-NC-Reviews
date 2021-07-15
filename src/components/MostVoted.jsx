import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMostVotedReview, patchReviews } from "../api";
import useVote from "../hooks/useVote";
import Comments from "./Comments";

const MostVoted = () => {
  const [topVoted, setTopVoted] = useState({});
  const { votes, incrementVote } = useVote(topVoted.votes);

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
        <div className="columns is-vcentered">
          <div className="column is-8 card">
            <h2 className="is-size-3 card-header-title">
              Current Top Voted Review
            </h2>
            <div className="card-content">
              <h1 className="is-size-1 title">{topVoted.title} </h1>
              <h3 className="is-size-3 subtitle">
                <em>by</em> {topVoted.owner}
              </h3>
              <p className="has-text-justified is-size-5">
                {topVoted.review_body}
              </p>
              <div className="columns my-3 is-vcentered">
                <div className="column is-4">
                  <p className="is-size-5">{votes} Current Votes</p>
                </div>
                <div className="column is-8">
                  <button className="button" onClick={() => handleVote()}>
                    Vote
                  </button>
                </div>
              </div>
              <Link to={`/Reviews/${topVoted.review_id}`}>
                <button className="button">See Full Review</button>
              </Link>
            </div>
          </div>
          <div className="column is-4">
            <p className="is-size-4 title">Comments</p>
            <Comments review_id={topVoted.review_id} />
            <button className="button">Add a Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostVoted;
