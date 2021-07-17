import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { patchComment } from "../api";
import { UserContext } from "../contexts/User";
import useVote from "../hooks/useVote";
import EditComment from "./EditComment";
import Success from "./Success";

const Comment = ({ comment }) => {
  const [edited, setEdited] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newCommentBody, setNewCommentBody] = useState(comment.body);
  const { user } = useContext(UserContext);
  const { votes, incrementVote } = useVote(comment.votes);

  const handleVote = () => {
    incrementVote();
    patchComment(comment.comment_id, 1);
  };

  return (
    <div>
      {edited ? <Success setEdited={setEdited} /> : null}
      <li>
        <div className="message is-small is-link my-3">
          <div className="message-header">
            <span className="is-italic">
              From
              <p className="has-text-weight-bold">{comment.author}</p>
            </span>
            {user ? (
              <button
                className="button is-success mx-2 mt-2"
                onClick={() => setEdit(true)}
              >
                Edit
              </button>
            ) : (
              <Link to="/Users">
                <button className="button is-success mx-2">Edit</button>
              </Link>
            )}
          </div>
          <div className="message-body">
            <p>{newCommentBody}</p>
          </div>
        </div>
        <div className="columns is-vcentered">
          <div className="column is-4">
            <p className="is-size-6">{votes} Votes</p>
          </div>
          <div className="column is-8">
            {user ? (
              <button className="button is-info" onClick={() => handleVote()}>
                Vote
              </button>
            ) : (
              <Link to="/Users">
                <button className="button is-info">Vote</button>
              </Link>
            )}
          </div>
        </div>
      </li>
      <EditComment
        comment={comment}
        edit={edit}
        setEdit={setEdit}
        setEdited={setEdited}
        setNewCommentBody={setNewCommentBody}
      />
    </div>
  );
};

export default Comment;
