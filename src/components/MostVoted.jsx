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
    <div className="MostVoted">
      <h3>Current Top Voted Review</h3>
      <h4>
        {topVoted.title} <br></br>
        <em>by</em> {topVoted.owner}
      </h4>
      <p className="MostVotedReview">{topVoted.review_body}</p>
      <p className="MostVotedCount">Votes: {votes}</p>
      <button>Comment</button>
      <Link to={`/Reviews/${topVoted.review_id}`}>
        <button>See Review</button>
      </Link>
      <button onClick={() => handleVote()}>Vote</button>
    </div>
  );
};

export default MostVoted;
