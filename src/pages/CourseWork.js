import { useState, useEffect } from 'react';
import React from 'react'
import '../styles/CourseWork.css';
import NavigationButtons from '../components/NavigationButtons';
import AssignmentData from '../data/assignments.json';
import CourseData from '../data/courses.json';

function CourseWork({ userId, userRole, setCurrentPage}) {
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Get courses
    if (userRole === 'student') {
      const enrolledCourses = CourseData.filter(course => course.studentsEnrolledArray.includes(userId));
      setCourses(enrolledCourses);
      const userAssignments = AssignmentData.filter(assignment => assignment.courseID);
      setAssignments(userAssignments);
    } else if (userRole === 'teacher') {
      const teachingCourses = CourseData.filter(course => course.teachersID === userId);
      setCourses(teachingCourses);
      const teacherAssignments = AssignmentData.filter(assignment => assignment.teachersID === userId);
      setAssignments(teacherAssignments);
    }
    // Get assignments for user
  }, [userRole, userId]);



  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("not").style.display = "none";
    document.getElementById("submitMessage").innerHTML = "Thank you for your submission!";
  }

  return (
    <div>
      <NavigationButtons setCurrentPage={setCurrentPage} />
      <div className="coursework-list">
        {courses.map(courses => {
          // Get assignments for this course and sort by due date
          const courseAssignments = assignments
          .filter(assignment => assignment.courseID === courses.courseID)
          .sort((a, b) => new Date(a.assignmentDueDate) - new Date(b.assignmentDueDate));

          return (
            <div key={courses.courseID} className="coursework-card">
              <h4>{courses.courseName}</h4>
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
      {userRole === 'student' && (
      <div className='submission'>
        Would you like to submit an assignment? 
        If so select the assignment you are submitting 
        <label htmlFor="assignment">Choose an assignment:</label>
        <select name="assignment" id="assignmentSelect">
          {assignments
            .filter(assignment => {
              // check if this assignment's course is in the user's courses
              const courseIds = courses.map(courses => courses.courseID);
              return courseIds.includes(assignment.courseID);
            })
            .map(assignment => (
              <option key={assignment.assignmentName} value={assignment.assignmentName} id="dropdown">
                {assignment.assignmentName}
              </option>
            ))}
        </select>

        <form className="not" id="not" onSubmit={handleSubmit}>
          <h1>Submit Assignment</h1>
          <textarea placeholder="Enter your writing here" id="assignmentText" />
          <button type="submitbutton" id="submitAssignment">Submit</button>
        </form>

        <div id="submitMessage"></div>
      </div>
      
      )}
      {userRole === 'teacher' && (
      <div className='submission'>
        Would you like to post an assignment? 
        <h2>Complete the following</h2>
        <form action="/action_page.php">
        <label for="country">What course is this for?</label>
        <select name="course" id="courseselect">
        {courses.map(course => (
          <option key={course.courseID} value={course.courseID}>
            {course.courseName}
          </option>
        ))}
        </select>

        <label for="assignmentName">Assignment Name:</label>
        <input type="text" id="assignmentName" name="firstname" placeholder="Assignment Name" />

        <label for="teachersID">School ID</label>
        <input type="text" id="teachersID" name="lastname" placeholder="ID" />

        <label for="duedate">Assignment Due Date</label>
        <input type="text" id="duedate" name="lastname" placeholder="YYYY-MM-DD" />

        <label for="duetime">Assignment Time Due</label>
        <input type="text" id="duetime" name="lastname" placeholder="HH-MM-SS" />

        <label for="pointsworth"> Assignment Points Worth</label>
        <input type="text" id="pointsworth" name="lastname" placeholder="00pts" />

        <label for="description">Assignment Description</label>
        <textarea type="text" id="duedate" name="lastname" placeholder="description" />
        
        <button type="submitbutton" id="submitAssignment">Submit</button>
  </form>
      </div>
      
      )}
    </div>
  );
}

export default CourseWork;