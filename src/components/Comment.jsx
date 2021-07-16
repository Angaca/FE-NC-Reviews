import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { patchComment } from "../api";
import { UserContext } from "../contexts/User";
import useVote from "../hooks/useVote";
import EditComment from "./EditComment";
import Success from "./Success";

const Comment = ({ comment }) => {
  const [alert, setAlert] = useState(false);
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
        {alert ? (
          <div className="notification is-warning is-light">
            <button className="delete" onClick={() => setAlert(false)}></button>
            <Link to="/Users">Please Log in first</Link>
          </div>
        ) : null}
        <div className="message is-small is-link my-3">
          <div className="message-header">
            <span className="is-italic">
              From
              <p className="has-text-weight-bold">{comment.author}</p>
            </span>
            <button
              className="button is-success mx-2"
              onClick={user ? () => setEdit(true) : () => setAlert(true)}
            >
              Edit
            </button>
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
            <button
              className="button is-info"
              onClick={user ? () => handleVote() : () => setAlert(true)}
            >
              Vote
            </button>
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
