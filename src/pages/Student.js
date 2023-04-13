import React from 'react';
import Profile from './Profile';

function Student({ currentUser, setCurrentPage }) {
  return (
    <div>
      <button onClick={() => setCurrentPage('courses')}>Back to Courses</button>
      <Profile currentUser={currentUser} />
    </div>
  );
}

export default Student;
