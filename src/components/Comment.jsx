import { patchComment } from "../api";
import useVote from "../hooks/useVote";

const Comment = ({ comment }) => {
  const { votes, incrementVote } = useVote(comment.votes);

  const handleVote = () => {
    incrementVote();
    patchComment(comment.comment_id, 1);
  };

  return (
    <li>
      <p className="is-size-5">{comment.body}</p>
      <p className="is-size-6">
        <em>by</em>
        {comment.author}
      </p>
      <div className="columns is-vcentered">
        <div className="column is-4">
          <p className="is-size-6">{votes} Votes</p>
        </div>
        <div className="column is-8">
          <button className="button" onClick={() => handleVote()}>
            Vote
          </button>
        </div>
      </div>
    </li>
  );
};

export default Comment;
