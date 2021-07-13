import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMostVotedReview } from "../api";

const MostVoted = () => {
  const [topVoted, setTopVoted] = useState({});

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
      <p className="MostVotedCount">Votes: {topVoted.votes}</p>
      <button>Comment</button>
      <Link to={`/Reviews/${topVoted.review_id}`}>
        <button>See Review</button>
      </Link>
      <button>Vote</button>
    </div>
  );
};

export default MostVoted;
