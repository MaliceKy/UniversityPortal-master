import React from 'react';
import NavigationButtons from '../components/NavigationButtons';
import '../styles/Announcements.css';

function Announcements({ setCurrentPage, userRole, userId }) {
  return (
    <div>


      <NavigationButtons setCurrentPage={setCurrentPage} userRole={userRole} userId={userId} />
      <h1>Announcements!</h1>
      <div className="announcement-card">
        <h2>"Important Safety Reminder: Forbidden Forest Off-Limits!"</h2>
        <p>Good afternoon, students of Hogwarts! This is Professor McGonagall speaking. I would like to remind all students that the Forbidden Forest is strictly off-limits. Several dangerous creatures have been spotted in the area recently, and we cannot risk any harm coming to our students. Anyone caught entering the Forbidden Forest will face disciplinary...</p>
        <button>Read More</button>
      </div>
      <div className="announcement-card">
        <h2>"Calling All Brave Witches and Wizards: Triwizard Tournament Comes to Hogwarts!"</h2>
        <p>Attention, students of Hogwarts! This is Professor Dumbledore. I am pleased to announce that the school will be hosting the Triwizard Tournament this year. Students over the age of 17 may submit.. </p>
        <button>Read More</button>
      </div>
      
      
    </div>
  );
}

export default Announcements;