import { useEffect, useState } from "react";
import { patchComment } from "../api";

const EditComment = ({
  setEdit,
  edit,
  setEdited,
  comment,
  setNewCommentBody,
}) => {
  const [commentBody, setCommentBody] = useState();

  useEffect(() => {
    setCommentBody(comment.body);
  }, [comment.body]);

  useEffect(() => {
    setNewCommentBody(commentBody);
  }, [commentBody, setNewCommentBody]);

  return (
    <div className={`modal ${edit ? "is-active" : null}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Edit comment</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => setEdit(false)}
          ></button>
        </header>
        <section className="modal-card-body">
          <label htmlFor="comment"></label>
          <textarea
            className="textarea is-info"
            onChange={(event) => setCommentBody(event.target.value)}
            name="comment"
            id="comment"
            value={commentBody}
            rows="5"
          ></textarea>
        </section>
        <footer className="modal-card-foot">
          <button
            className="button is-success"
            onClick={() => {
              patchComment(comment.comment_id, 0, commentBody);
              setEdit(false);
              setEdited(true);
            }}
          >
            Save changes
          </button>
          <button className="button" onClick={() => setEdit(false)}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default EditComment;
