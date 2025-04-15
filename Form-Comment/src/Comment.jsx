import "./Comment.css";
import { useState } from "react";
import CommentsForm from "./CommentsForm";

export default function Comment() {
  let [Comments, setComments] = useState([
    {
      username: "@rt",
      remarks: "good",
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

  return (
    <>
      <div>
        <h3>All Comments!</h3>
        {Comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span>rating={comment.rating}</span>
            <p>~ {comment.username}</p>
          </div>
        ))}
      </div>
      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
