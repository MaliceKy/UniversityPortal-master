import { useState, useEffect } from 'react';
import NavigationButtons from '../components/NavigationButtons';
import '../styles/Course.css';
import CourseData from '../data/courses.json';
import UserData from '../data/login.json';
import GradeData from '../data/grades.json';

function Course({ setCurrentPage, userRole, userId }) {
  const [courses, setCourses] = useState([]);
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    if (userRole === 'student') {
      const enrolledCourses = CourseData.filter(course =>
        course.studentsEnrolledArray.includes(userId)
      );
      const studentGrades = GradeData.filter(grade => grade.studentID === userId);
      setGrades(studentGrades);
      setCourses(enrolledCourses);
    } else if (userRole === 'teacher') {
      const teachingCourses = CourseData.filter(course => course.teachersID === userId);
      setCourses(teachingCourses);
    }
  }, [userRole, userId]);

  const getGrade = (courseId, teachersId) => {
    if (userRole === 'student') {
      const grade = grades.find(grade => grade.courseID === courseId && grade.studentID === userId);
      if (grade) {
        return <p>Grade: {grade.grade}</p>;
      } else {
        return <p>Grade not in yet</p>;
      }
    } else if (userRole === 'teacher' && teachersId === userId) {
      const courseGrades = grades.filter(grade => grade.courseID === courseId);
      if (courseGrades.length > 0) {
        return (
          <div>
            <h4>Grades:</h4>
            <ul>
              {courseGrades.map(grade => (
                <li key={grade.studentID}>{grade.studentName}: {grade.grade}</li>
              ))}
            </ul>
          </div>
        );
      } else {
        return <p>No grades yet</p>;
      }
    }
  
};
  const getTeacherName = (teacherId) => {
    const teacher = UserData.find(user => user.ID === teacherId && user.role === 'teacher');
    return teacher ? teacher.name : 'Unknown';
  };

  return (
    <div>
      <NavigationButtons setCurrentPage={setCurrentPage} userRole={userRole} userId={userId} />
      <h3 className="Course-welcome-title">Registered Courses:</h3>
      <div className="course-container">
        {courses.length === 0 ? (
          <p1>Currently you're not registered for any courses</p1>
        ) : (
          <div className="course-list">
            {courses.map(course => (
              <div key={course.courseID} className="course-card">
                <h4>{course.courseName}</h4>
                <p>{course.description}</p>
                <p> Instructor: {getTeacherName(course.teachersID)}</p>
                <p>Classroom: {course.classRoom}</p>
                <p> Your Classes: {course.classRoom} </p>
                <h4>Meeting Times:</h4>
                <hr />
                <p>{course.classDays}</p>
                <p>{course.classTime}</p>
                {getGrade(course.courseID)}
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

