import React from 'react';
import Headr from '../components/Headr';
import Footr from '../components/Footr';
import '../styles/School.css';

function School({ setCurrentPage }) {
  // Function to handle the login click and update the current page
  const handleLoginClick = () => {
    setCurrentPage('login');
  };

  return (
    <div className='page'>
      {/* Render the header */}
      <Headr />

      {/* Render the page content */}
      <div className='page-content'>
        <h1>Welcome to Hogwarts School of Witchcraft and Wizardry!</h1>
        <p>Please log in to access your courses.</p>
        <button className='btn' onClick={handleLoginClick}>Portal</button>
      </div>

      {/* Render the footer */}
      <Footr />
    </div>
  );
}

export default School;
