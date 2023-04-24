import React, { useState } from 'react';
import NavigationButtons from '../components/NavigationButtons';
import '../styles/Announcements.css';

function Announcements({ setCurrentPage, userRole, userId }) {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const handleExpandClick = (announcementIndex) => {
    if (announcementIndex === 1) {
      setIsExpanded1(!isExpanded1);
    } else if (announcementIndex === 2) {
      setIsExpanded2(!isExpanded2);
    }
  };

  return (
    <div>
      <NavigationButtons setCurrentPage={setCurrentPage} userRole={userRole} userId={userId} />
      <h1>Announcements!</h1>
      <div className="announcement-card">
        <h2>"Important Safety Reminder: Forbidden Forest Off-Limits!"</h2>
        <p>{isExpanded1 ? "Good afternoon, students of Hogwarts! This is Professor McGonagall speaking. I would like to remind all students that the Forbidden Forest is strictly off-limits. Several dangerous creatures have been spotted in the area recently, and we cannot risk any harm coming to our students. Anyone caught entering the Forbidden Forest will face disciplinary action, up to and including expulsion." : "Good afternoon, students of Hogwarts! This is Professor McGonagall speaking. I would like to remind all students that the Forbidden Forest is strictly off-limits. Several dangerous creatures have been spotted in the area recently, and we cannot risk any harm coming to our students. "}
        </p>
        <button onClick={() => handleExpandClick(1)}>{isExpanded1 ? "Read Less" : "Read More"}</button>
      </div>
      <div className="announcement-card">
        <h2>"Calling All Brave Witches and Wizards: Triwizard Tournament Comes to Hogwarts!"</h2>
        <p>{isExpanded2 ? "Attention, students of Hogwarts! This is Professor Dumbledore. I am pleased to announce that the school will be hosting the Triwizard Tournament this year. Students over the age of 17 may submit their names to the Goblet of Fire, and three champions will be selected to compete in a series of magical contests. The winner will receive eternal glory and a prize of 1000 Galleons." : "Attention, students of Hogwarts! This is Professor Dumbledore. I am pleased to announce that the school will be hosting the Triwizard Tournament this year. Students over the age of 17 may submit their names to the Goblet of Fire, and three champions will be selected to compete in a series of magical contests."}</p>
        <button onClick={() => handleExpandClick(2)}>{isExpanded2 ? "Read Less" : "Read More"}</button>
      </div>
    </div>
  );
}

export default Announcements;
