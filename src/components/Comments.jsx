import { useEffect, useState } from "react";
import { getComments } from "../api";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState(["There are no comments yet..."]);

  useEffect(() => {
    getComments(review_id).then(({ data }) => {
      setComments(data.comments);
    });
  }, [review_id]);

  return (
    <div className="Comments">
      <h4>Comments:</h4>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h5>{comment.author}:</h5>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
