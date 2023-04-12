import { useState, useEffect } from 'react';
import '../styles/Tab.css';
import '../styles/Course.css';
import Data from '../data/login.json';

function Pages({ setCurrentPage }) {
  const [buttonSize, setButtonSize] = useState('button');

  const handleProfileClick = () => {
    console.log('Profile button clicked');
    setCurrentPage('student');
  };

  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} button clicked`);
    // Add your logic here for handling the click event
  };

  const handleLogoutClick = () => {
    console.log('Logout button clicked');
    window.location.href = 'https://i.pinimg.com/564x/10/04/43/1004430dee8038f3bdfa86cde175057f.jpg';
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setButtonSize('button button-small');
      } else {
        setButtonSize('button');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const buttons = [
    { name: 'Profile', onClick: handleProfileClick },
    { name: 'Courses', onClick: () => handleButtonClick('Courses') },
    { name: 'Content', onClick: () => handleButtonClick('Content') },
    { name: 'Events', onClick: () => handleButtonClick('Events') },
    { name: 'Classmates', onClick: () => handleButtonClick('Classmates') },
    { name: 'Grades', onClick: () => handleButtonClick('Grades') },
    { name: 'Announcements', onClick: () => handleButtonClick('Announcements') },
    { name: 'Cool Button', onClick: handleLogoutClick },
  ];

  return (
    <div className="button-container">
      {/* Example of clickable buttons */}
      {buttons.map(({ name, onClick }) => (
        <button key={name} className={buttonSize} onClick={onClick}>
          {name}
        </button>
      ))}
    </div>
  );
}

export default Pages;
