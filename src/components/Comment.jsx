import { patchComment } from "../api";
import useVote from "../hooks/useVote";

const Comment = ({ comment }) => {
  const { votes, incrementVote } = useVote(comment.votes);

  const handleVote = () => {
    incrementVote();
    patchComment(comment.comment_id, 1);
  };

  return (
    <li key={comment.comment_id}>
      <div className="message is-small is-link my-3">
        <div className="message-header">
          <span className="is-italic">
            From
            <p className="has-text-weight-bold">{comment.author}</p>
          </span>
        </div>
        <div className="message-body">
          <p>{comment.body}</p>
        </div>
      </div>
      <div className="columns is-vcentered">
        <div className="column is-4">
          <p className="is-size-6">{votes} Votes</p>
        </div>
        <div className="column is-8">
          <button className="button is-info" onClick={() => handleVote()}>
            Vote
          </button>
        </div>
      </div>
    </li>
  );
};

export default Comment;
