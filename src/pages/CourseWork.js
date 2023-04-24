import { useState, useEffect } from 'react';
import React from 'react'
import '../styles/CourseWork.css';
import NavigationButtons from '../components/NavigationButtons';
import AssignmentData from '../data/assignments.json';
import CourseData from '../data/courses.json';

function CourseWork({ userId, userRole, setCurrentPage}) {
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    // Get courses
    if (userRole === 'student') {
      const enrolledCourses = CourseData.filter(course => course.studentsEnrolledArray.includes(userId));
      setCourses(enrolledCourses);
    } else if (userRole === 'teacher') {
      const teachingCourses = CourseData.filter(course => course.teacher === userId);
      setCourses(teachingCourses);
    }

    // Get assignments for user
    const userAssignments = AssignmentData.filter(assignment => assignment.courseID);
    setAssignments(userAssignments);
  }, [userRole, userId]);

  const handleButtonClick = () => {

    setButtonClicked(true);
  };

  return (
    <div>
      <NavigationButtons setCurrentPage={setCurrentPage} />
      <div className="coursework-list">
        {courses.map(course => {
          // Get assignments for this course and sort by due date
          const courseAssignments = assignments
          .filter(assignment => assignment.courseID === course.courseID)
          .sort((a, b) => new Date(a.assignmentDueDate) - new Date(b.assignmentDueDate));

          return (
            <div key={course.courseID} className="coursework-card">
              <h4>{course.courseName}</h4>
              {courseAssignments.map(assignment => (
                <div key={assignment.assignmentName}>
                  <h4>{assignment.assignmentName}</h4>
                  <p>Due date: {assignment.assignmentDueDate} {assignment.assignmentDueTime}</p>
                  <p>Description: {assignment.assignmentDescription}</p>
                  <p>Worth: {assignment.assignmentWorth}</p>
                </div>
              ))}
              
            </div>
          );
        })}
      </div>
      <div className='submission'>
        Would you like to submit an assignment? 
        If so select the assignment you are submitting 
        <label htmlFor="assignment">Choose an assignment:</label>
        <select name="assignment" id="assignment">
          {assignments.map(assignment => (
            <option key={assignment.assignmentName} value={assignment.assignmentName}>{assignment.assignmentName}</option>
          ))}
        </select>

        <form className="not" id="not">
        <h1>Submit Assignment</h1>
        <textarea placeholder="Enter your writing here" id="assingmenttext" />
        <button type="submitbutton" id="submitAssignment">Submit</button>
       
      </form>
      </div>
    </div>
  );
}

export default CourseWork;