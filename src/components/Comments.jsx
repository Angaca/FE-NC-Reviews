import { useEffect, useState } from "react";
import { getComments, patchComment } from "../api";
import useVote from "../hooks/useVote";
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

    // <div className="content">
    //   <h4>Comments:</h4>
    //   <ul>
    //     {comments.map((comment) => {
    //       return (
    //         <li key={comment.comment_id}>
    //           <h5>{comment.author}:</h5>
    //           <p>{comment.body}</p>
    //           <p>Votes: {comment.votes}</p>
    //           <button
    //             className="button"
    //             onClick={() => handleVote(comment.comment_id)}
    //           >
    //             Vote
    //           </button>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
  );
};

export default Comments;
