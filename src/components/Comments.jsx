import { useEffect, useState } from "react";
import { getComments } from "../api";
import Comment from "./Comment";

const Comments = ({ review_id, setLoaded }) => {
  const [comments, setComments] = useState(["There are no comments yet..."]);

  useEffect(() => {
    if (review_id) {
      getComments(review_id).then(({ data }) => {
        setComments(data.comments);
        setLoaded(true);
      });
    }
  }, [review_id, setLoaded]);

  return (
    <div className="content">
      <ul>
        {comments.map((comment) => {
          return <Comment comment={comment} key={comment.comment_id || 1} />;
        })}
      </ul>
    </div>
  );
};

export default Comments;
