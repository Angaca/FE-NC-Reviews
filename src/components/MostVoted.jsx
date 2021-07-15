import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMostVotedReview, patchReviews } from "../api";
import useVote from "../hooks/useVote";

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
    <div className="content has-text-centered">
      <h3>Current Top Voted Review</h3>
      <h4>
        {topVoted.title} <br></br>
        <em>by</em> {topVoted.owner}
      </h4>
      <section className="section">
        <p className="container">{topVoted.review_body}</p>
      </section>
      <p>Votes: {votes}</p>
      <button className="button">Comment</button>
      <Link to={`/Reviews/${topVoted.review_id}`}>
        <button className="button">See Review</button>
      </Link>
      <button className="button" onClick={() => handleVote()}>
        Vote
      </button>
    </div>
  );
};

export default MostVoted;
