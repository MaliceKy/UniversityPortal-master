// NavigationButtons.js
import { useState, useEffect } from 'react';
import '../styles/Tab.css';
import '../styles/Course.css';

function NavigationButtons({ setCurrentPage }) {
  const [buttonSize, setButtonSize] = useState('button');

  const handleProfileClick = () => {
    console.log('Profile button clicked');
    setCurrentPage('profile');
  };

  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} button clicked`);
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
  ];

  return (
    <div className="button-container">
      {buttons.map(({ name, onClick }) => (
        <button key={name} className={buttonSize} onClick={onClick}>
          {name}
        </button>
      ))}
    </div>
  );
}

export default NavigationButtons;
