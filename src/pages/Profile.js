import React from 'react';
import LoginData from '../data/login.json';
import '../styles/Profile.css';

function Profile({ currentUser }) {
  const user = LoginData.find(user => user.ID === currentUser);

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </div>
    </div>
  );
}

export default Profile;

