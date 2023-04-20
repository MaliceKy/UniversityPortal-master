import { useState, useEffect } from 'react';
import LoginData from '../data/login.json';
import '../styles/Profile.css';
import '../styles/Course.css';
import CourseData from '../data/courses.json';


function Profile({ currentUser }) {
  const [courseName, setCourseName] = useState('');

  const user = LoginData.find(user => user.ID === currentUser);

  useEffect(() => {
    const enrolledCourses = CourseData.filter(course => course.studentsEnrolledArray.includes(user.ID));
    const courseNames = enrolledCourses.map(course => course.courseName);
    setCourseName(courseNames.join(", "));
  }, [currentUser, user]);

  return (
    <div >
      
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
  );
}

export default Profile;


