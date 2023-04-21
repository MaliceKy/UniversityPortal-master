// Course.js
import { useState, useEffect } from 'react';
import NavigationButtons from '../components/NavigationButtons';
import '../styles/Course.css';
import CourseData from '../data/courses.json';

function Pages({ setCurrentPage, userRole, userId }) {
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
      <NavigationButtons setCurrentPage={setCurrentPage} />
      <h3>Registered Courses:</h3>
      {courses.length === 0 ? (
        <p>Currently you're not registered for any courses</p>
      ) : (
        <div className="course-list">
          {courses.map(course => (
            <div key={course.courseID} className="course-card">
              <h4>{course.courseName}</h4>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Pages;
