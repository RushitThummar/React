import { useState } from "react";

export default function CommentsForm({ addNewComment }) {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 3,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    addNewComment(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 3,
    });
  };

  return (
    <div>
      <h3>Add Comment!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          placeholder="username"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />
        <br />

        <label htmlFor="remarks">Remarks:</label>
        <textarea
          placeholder="add remarks"
          value={formData.remarks}
          onChange={handleInputChange}
          id="remarks"
          name="remarks"
        ></textarea>
        <br />

        <label htmlFor="rating">Rating:</label>
        <input
          placeholder="rating"
          type="number"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        ></input>

        <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
