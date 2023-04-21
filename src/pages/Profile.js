// Profile.js
import { useState, useEffect } from 'react';
import NavigationButtons from '../components/NavigationButtons';
import LoginData from '../data/login.json';
<<<<<<< HEAD
=======
import '../styles/Profile.css';
import '../styles/Course.css';
>>>>>>> 2c98fae86cbee3feb2229f28267809476478d1ec
import CourseData from '../data/courses.json';
import '../styles/Profile.css';

<<<<<<< HEAD
function Profile({ currentUser, setCurrentPage }) {
=======

function Profile({ currentUser }) {
>>>>>>> 2c98fae86cbee3feb2229f28267809476478d1ec
  const [courseName, setCourseName] = useState('');

  const user = LoginData.find(user => user.ID === currentUser);

  useEffect(() => {
    const enrolledCourses = CourseData.filter(course => course.studentsEnrolledArray.includes(user.ID));
    const courseNames = enrolledCourses.map(course => course.courseName);
    setCourseName(courseNames.join(", "));
  }, [currentUser, user]);

  return (
<<<<<<< HEAD
    <div>
      <NavigationButtons setCurrentPage={setCurrentPage} />
      <div className="profile-wrapper">
        <div className="profile-container">
          <h2>Profile</h2>
          <div className="profile-info">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <p> Your Classes: {courseName} </p>
          </div>
        </div>
=======
    <div >
      
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
        <p> Your Classes: {courseName} </p>
>>>>>>> 2c98fae86cbee3feb2229f28267809476478d1ec
      </div>
    </div>
    </div>
  );
}

export default Profile;

