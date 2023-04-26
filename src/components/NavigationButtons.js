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

  const handleAccessabilityClick = () => {
    console.log('accessibility button clicked');
    setCurrentPage('accessibility');
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
    { name: 'Assignments', onClick: handleAssignmentClick },
    { name: 'Announcements', onClick: () => handleAnnouncementClick('Announcements') },
  ];

  return (
    <div className="button-container">
      {buttons.map(({ name, onClick }) => (
        <button key={name} className={buttonSize} onClick={onClick}>
          {name}
        </button>
      ))}
      {userRole === 'teacher' && (
        <button className={buttonSize} onClick={() => handleAccessabilityClick('Accessibility')}>
          Create Class
        </button>
      )}
    </div>
  );
}

export default NavigationButtons;
