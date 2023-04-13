import React from 'react';
import Profile from './Profile';

function Teacher({ currentUser, setCurrentPage }) {
  return (
    <div>
      <button onClick={() => setCurrentPage('courses')}>Back to Courses</button>
      <Profile currentUser={currentUser} />
    </div>
  );
}

export default Teacher;
