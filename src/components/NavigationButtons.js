import { useState, useEffect } from 'react';
import '../styles/buttons.css';

function NavigationButtons({ setCurrentPage, userRole, userId }) {
  const [buttonSize, setButtonSize] = useState('button');

  const handleProfileClick = () => {
    console.log('Profile button clicked');
    setCurrentPage('profile');
  };
  const handleAssignmentClick = () => {
    console.log('Assignment button clicked');
    setCurrentPage('courseWork');
  };
  const handleCourseClick = () => {
    console.log('Courses button clicked');
    setCurrentPage('courses');
  };
  const handleAnnouncementClick = () => {
    console.log('Courses button clicked');
    setCurrentPage('announcements');
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
    { name: 'Courses', onClick: handleCourseClick },
    { name: 'Content', onClick: handleContentClick },
    { name: 'Events', onClick: () => handleButtonClick('Events') },
    { name: 'Assignments', onClick: handleAssignmentClick },
    { name: 'Grades', onClick: () => handleButtonClick('Grades') },
    { name: 'Announcements', onClick: () => handleAnnouncementClick('Announcements') },
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

