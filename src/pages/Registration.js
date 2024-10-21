// frontend/src/pages/Registration.js
import React from 'react';

const Registration = () => {
  return (
    <div>
      <h2>Registration Page</h2>
      <form>
        <label>Email:</label>
        <input type="email" name="email" />
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;