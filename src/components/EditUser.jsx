import { useEffect, useState } from "react";
import { patchUser } from "../api";

const EditReview = ({ setEdit, edit, setEdited, user }) => {
  const [name, setName] = useState();
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    setName(user.name);
  }, [user.name]);
  useEffect(() => {
    setAvatar(user.avatar_url);
  }, [user.avatar_url]);

  return (
    <div className={`modal ${edit ? "is-active" : null}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Edit user</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => setEdit(false)}
          ></button>
        </header>
        <section className="modal-card-body">
          <label htmlFor="name">Name:</label>
          <textarea
            className="textarea is-info my-4"
            onChange={(event) => setName(event.target.value)}
            name="review"
            id="review"
            value={name}
            rows="1"
          ></textarea>
          <label htmlFor="avatar">Avatar URL:</label>
          <textarea
            className="textarea is-info my-4"
            onChange={(event) => setAvatar(event.target.value)}
            name="review"
            id="review"
            value={avatar}
            rows="3"
          ></textarea>
        </section>
        <footer className="modal-card-foot">
          <button
            className="button is-success"
            onClick={() => {
              patchUser(user.username, avatar, name);
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

export default EditReview;
