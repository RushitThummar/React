import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [count, setCount] = useState(0);

  let toogleLike = () => {
    setIsLiked(!isLiked);
    setCount((count += 1));
  };

  let styles = {
    color: "red",
  };

  return (
    <div>
      <p>count={count}</p>
      <p onClick={toogleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={styles}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
        &nbsp;&nbsp;Like
      </p>
    </div>
  );
}
