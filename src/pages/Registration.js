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

  const handleCourseClick = (event, course) => {
    const user = UserData.find(user => user.ID === currentUser);
    const requestData = {
      courseId: course.courseID,
      userId: user.ID
    };
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      const updatedCourse = {
        ...course,
        studentsEnrolledArray: [...course.studentsEnrolledArray, user.ID]
      };
      const updatedCourses = CourseData.map(c => {
        if (c.courseID === course.courseID) {
          return updatedCourse;
        }
        return c;
      });
      setUnregisteredCourses(updatedCourses.filter(c => !c.studentsEnrolledArray.includes(user.ID)));
    })
    .catch(error => {
      console.error(error);
    });
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
        onClick={(event) => handleCourseClick(event, course)}
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
        <div className="course-card-container" style={{ marginTop: '10px' }}>
          {courseButtons}
        </div>
      </div>
      <button onClick={() => setCurrentPage('dropping')} className="drop-button">
        Drop Course(s)
      </button>
    </div>
  );
}

export default Registration;
