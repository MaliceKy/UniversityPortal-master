import React, { useState, useEffect } from 'react';
import "../styles/Registration.css";
import NavigationButtons from '../components/NavigationButtons';
import CourseData from '../data/courses.json';
import UserData from '../data/login.json';

function Registration({ currentUser, setCurrentPage }) {
  const [unregisteredCourses, setUnregisteredCourses] = useState([]);

  useEffect(() => {
    const user = UserData.find(user => user.ID === currentUser);
    const availableCourses = CourseData.filter(
      course => !course.studentsEnrolledArray.includes(user.ID)
    );
    setUnregisteredCourses(availableCourses);
  }, [currentUser]);

  const handleCourseClick = (event) => {
    
  };

  const courseButtons = unregisteredCourses.map((course) => (
    <div key={course.courseID} className="course-cardReg">
      <h4>{course.courseName}</h4>
      <p>{course.description}</p>
      <p>Instructor: {course.teacher}</p>
      <p>Classroom: {course.classRoom}</p>
      <p>Course ID: {course.courseID}</p>
      <h4>Meeting Times:</h4>
      <hr />
      <p>Class Days: {course.classDays}</p>
      <p>Class Time: {course.classTime}</p>
      <button
        className="course-button"
        onClick={handleCourseClick}
        key={course.courseID}
      >
        Register for {course.courseName}
      </button>
    </div>
  ));

  return (
    <div>
      <NavigationButtons setCurrentPage={setCurrentPage} />
      <div className="registration-text" style={{ marginTop: '40px' }}>
        <h2>Register for classes!</h2>
        <div className="course-list" style={{ marginTop: '10px' }}>
          {courseButtons}
        </div>
      </div>
    </div>
  );
}

export default Registration;

