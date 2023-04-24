import { useState, useEffect } from 'react';
import NavigationButtons from '../components/NavigationButtons';
import '../styles/Course.css';
import CourseData from '../data/courses.json';

function Course({ setCurrentPage, userRole, userId }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (userRole === 'student') {
      const enrolledCourses = CourseData.filter(course =>
        course.studentsEnrolledArray.includes(userId)
      );
      setCourses(enrolledCourses);
    } else if (userRole === 'teacher') {
      const teachingCourses = CourseData.filter(course => course.teacher === userId);
      setCourses(teachingCourses);
    }
  }, [userRole, userId]);

  return (
    <div>
      <NavigationButtons setCurrentPage={setCurrentPage} userRole={userRole} userId={userId} />
      <h3 className="Course-welcome-title">Registered Courses:</h3>
      <div className="course-container">
        {courses.length === 0 ? (
          <p>Currently you're not registered for any courses</p>
        ) : (
          <div className="course-list">
            {courses.map(course => (
              <div key={course.courseID} className="course-card">
                <h4>{course.courseName}</h4>
                <p>{course.description}</p>
                <p> Instructor: {course.teacher}</p>
                <p>Classroom: {course.classRoom}</p>
                <p> Your Classes: {course.classRoom} </p>
                <h4>Meeting Times:</h4>
                <hr />
                <p>{course.classDays}</p>
                <p>{course.classTime}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="register-container">
        <h3 className="course-register-lead">Not registered for all of your courses?</h3>
        <button className="registration-button" onClick={() => setCurrentPage("registration")}>
          Register Here
        </button>
      </div>
    </div>
  );
}

export default Course;
