import React, { useRef } from "react";

const Form = ({ onLogin }) => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = userNameRef.current.value;
    const password = passwordRef.current.value;
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input placeholder="Username" ref={userNameRef} />

      <label htmlFor="password">Password</label>
      <input placeholder="Password" type="password" ref={passwordRef} />

      <button type="submit">Login</button>
    </form>
  );
};

export default Form;
