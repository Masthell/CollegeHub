// frontend/src/pages/Login.js
import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <label>Email:</label>
        <input type="email" name="email" />
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;