import { useEffect, useState } from "react";
import { patchReviews } from "../api";

const EditReview = ({ setEdit, edit, setEdited, review }) => {
  const [reviewBody, setReviewBody] = useState();

  useEffect(() => {
    setReviewBody(review.review_body);
  }, [review.review_body]);

  return (
    <div className={`modal ${edit ? "is-active" : null}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Edit review</p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => setEdit(false)}
            ></button>
          </header>
          <div className="modal-card-body">
            <form>
              <label className="label" htmlFor="review">
                Review
              </label>
              <div className="control">
                <textarea
                  className="textarea is-info"
                  onChange={(event) => setReviewBody(event.target.value)}
                  name="review"
                  id="review"
                  value={reviewBody}
                  rows="15"
                ></textarea>
              </div>
            </form>
          </div>
          <footer className="modal-card-foot">
            <button
              className="button is-success"
              onClick={() => {
                patchReviews(review.review_id, 0, reviewBody);
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
    </div>
  );
};

export default EditReview;
