// frontend/src/pages/UserProfile.js
import React from 'react';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      {/* Здесь можно добавить форму редактирования профиля */}
    </div>
  );
};

export default UserProfile;