import { useState } from "react";

export default function Form() {
  let [fullName, setFulName] = useState("");
  let [username, setUserName] = useState("");

  let handleNameChange = (event) => {
    setFulName(event.target.value);
  };
  let handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <form>
      <label htmlFor="userName">Full Name: </label>
      <input
        placeholder="enter full name"
        type="text"
        value={fullName}
        onChange={handleUserNameChange}
        id="userName"
      />
      <label htmlFor="username">User Name: </label>
      <input
        placeholder="enter username"
        type="text"
        value={fullName}
        onChange={handleNameChange}
        id="username"
      />
      &nbsp;&nbsp;
      <button>Submit!</button>
    </form>
  );
}
