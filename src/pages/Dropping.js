import React, { useState, useEffect } from 'react';
import '../styles/Dropping.css';
import NavigationButtons from '../components/NavigationButtons';
import CourseData from '../data/courses.json';
import UserData from '../data/login.json';

function Dropping({ currentUser, userRole, setCurrentPage }) {
  const [unregisteredCourses, setUnregisteredCourses] = useState([]);

  useEffect(() => {
    const user = UserData.find((user) => user.ID === currentUser);
    const availableCourses = CourseData.filter(
      (course) => course.studentsEnrolledArray.includes(user.ID)
    );
    setUnregisteredCourses(availableCourses);
  }, [currentUser]);

  const handleCourseClick = (event, course) => {
    const user = UserData.find((user) => user.ID === currentUser);
    const requestData = {
      courseId: course.courseID,
      userId: user.ID,
    };
    fetch('/api/drop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        const updatedCourse = {
          ...course,
          studentsEnrolledArray: course.studentsEnrolledArray.filter(
            (id) => id !== user.ID
          ),
        };
        const updatedCourses = CourseData.map((c) => {
          if (c.courseID === course.courseID) {
            return updatedCourse;
          }
          return c;
        });
        setUnregisteredCourses(
          updatedCourses.filter((c) => c.studentsEnrolledArray.includes(user.ID))
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const courseButtons = unregisteredCourses.map((course) => (
    <div key={course.courseID} className="course-cardDrop">
      <h4>{course.courseName}</h4>
      <div className="description-container">
        <p>{course.description}</p>
      </div>
      <p>Instructor: {course.teacher}</p>
      <p>Classroom: {course.classRoom}</p>
      <p>Course ID: {course.courseID}</p>
      <h4>Meeting Times:</h4>
      <hr />
      <p>Class Days: {course.classDays}</p>
      <p>Class Time: {course.classTime}</p>
      <button
        className="drop-course-button"
        onClick={(event) => handleCourseClick(event, course)}
        key={course.courseID}
      >
        Drop {course.courseName}
      </button>
    </div>
  ));
  

  return (
    <div>
      <NavigationButtons userRole={userRole} setCurrentPage={setCurrentPage} />
      <div className="drop-text" style={{ marginTop: '40px' }}>
        <h2>Drop Courses:</h2>
        <div className="course-card-container" style={{ marginTop: '10px' }}>
          {courseButtons}
        </div>
      </div>
      <button onClick={() => setCurrentPage('registration')} className="drop-button">
        Register Course(s)
      </button>
    </div>
  );
}

export default Dropping;

