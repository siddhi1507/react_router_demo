import React from 'react';

const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Password:</label>
        <input type="password" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
