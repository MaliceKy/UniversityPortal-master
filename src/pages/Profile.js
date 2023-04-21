// Profile.js
import { useState, useEffect } from 'react';
import NavigationButtons from '../components/NavigationButtons';
import LoginData from '../data/login.json';
import CourseData from '../data/courses.json';
import '../styles/Profile.css';

function Profile({ currentUser, setCurrentPage }) {
  const [courseName, setCourseName] = useState('');

  const user = LoginData.find(user => user.ID === currentUser);

  useEffect(() => {
    const enrolledCourses = CourseData.filter(course => course.studentsEnrolledArray.includes(user.ID));
    const courseNames = enrolledCourses.map(course => course.courseName);
    setCourseName(courseNames.join(", "));
  }, [currentUser, user]);

  return (
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
      </div>
    </div>
  );
}

export default Profile;

