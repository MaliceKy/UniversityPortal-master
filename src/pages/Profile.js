import { useState } from 'react';
import LoginData from '../data/login.json';
import '../styles/Profile.css';
import CourseData from '../data/courses.json';




function Profile({ currentUser }) {
  const [courseName, setCourseName] = useState('');

  const user = LoginData.find(user => user.ID === currentUser);
  const class1 = CourseData.find(class1 => class1.studentsEnrolledArray === user.ID );

  setCourseName(class1.courseName);

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
        <p>Your Classes: {class1.courseName}</p>
        
      </div>
    </div>
  );
}

export default Profile;

