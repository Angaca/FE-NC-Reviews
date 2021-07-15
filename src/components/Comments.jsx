import { useEffect, useState } from "react";
import { getComments } from "../api";
import Comment from "./Comment";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState(["There are no comments yet..."]);

  useEffect(() => {
    getComments(review_id).then(({ data }) => {
      setComments(data.comments);
    });
  }, [review_id]);

  return (
    <div className="content">
      <ul>
        {comments.map((comment) => {
          return <Comment comment={comment} />;
        })}
      </ul>
    </div>
  );
};

export default Comments;
