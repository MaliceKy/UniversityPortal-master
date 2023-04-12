import { useState } from 'react';
import "../styles/Tab.css";
import "../styles/Course.css";
import Data from '../data/login.json';



function Pages( {setCurrentPage}) {

  const handleProfileClick = () => {
    console.log('Courses button clicked');
    setCurrentPage('student');
       
    };
 
   
  const handleCoursesClick = () => {
    console.log('Courses button clicked');
    // Add your logic here for handling the click event
  };

  const handleContentClick = () => {
    console.log('Content button clicked');
    // Add your logic here for handling the click event
  };

  const handleEventsClick = () => {
    console.log('Events button clicked');
    // Add your logic here for handling the click event
  };

  const handleClassmatesClick = () => {
    console.log('Classmates button clicked');
    // Add your logic here for handling the click event
  };

  const handleGradesClick = () => {
    console.log('Grades button clicked');
    // Add your logic here for handling the click event
  };

  const handleAnnouncementsClick = () => {
    console.log('Announcements button clicked');
    // Add your logic here for handling the click event
  };

  const handleLogoutClick = () => {
    console.log('Logout button clicked');
    window.location.href = 'https://i.pinimg.com/564x/10/04/43/1004430dee8038f3bdfa86cde175057f.jpg';
  };

  return (
    <div className='final'> 
      <div className="button-container">
        {/* Example of clickable buttons */}
        <button className="button" onClick={handleProfileClick} >Profile</button>
        <button className="button" onClick={handleCoursesClick}>Courses</button>
        <button className="button" onClick={handleContentClick}>Content</button>
        <button className="button" onClick={handleEventsClick}>Events</button>
        <button className="button" onClick={handleClassmatesClick}>Classmates</button>
        <button className="button" onClick={handleGradesClick}>Grades</button>
        <button className="button" onClick={handleAnnouncementsClick}>Announcements</button>
        <button className="button" onClick={handleLogoutClick}>Cool Button</button>
        </div>


      
    </div>

    
  );
}

export default Pages;