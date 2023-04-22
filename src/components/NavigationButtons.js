// NavigationButtons.js
import { useState, useEffect } from 'react';
import '../styles/Tab.css';
import '../styles/Course.css';

function NavigationButtons({ setCurrentPage, userRole, userId }) {
  const [buttonSize, setButtonSize] = useState('button');

  const handleProfileClick = () => {
    console.log('Profile button clicked');
    setCurrentPage('profile');
  };
  const handleAssignmentClick = () => {
    console.log('Profile button clicked');
    setCurrentPage('courseWork');
  };

  const handleContentClick = () => {
    console.log('Content button clicked');
    if(userRole === "Teacher"){
      setCurrentPage('teacher');
    }
    else {
      setCurrentPage('student');
    }
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
    { name: 'Content', onClick: () => handleContentClick('Content') },
    { name: 'Events', onClick: () => handleButtonClick('Events') },
    { name: 'Assignments', onClick: () => handleAssignmentClick('courseWork') },
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
