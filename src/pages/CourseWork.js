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
      <div className='teachsub'>

        Would you like to post an assignment? 
        <h2>Complete the following</h2>
        
        <form >
        <div className='rightSide5'>
        <label for="drop" class="form-label">What course is this for?</label>
        <select name="drop" id="drop">
        {courses.map(course => (
          <option key={course.courseID} value={course.courseID}>
            {course.courseName}
          </option>
        ))}
        </select>

        
        <label for='assignname' class="form-label" id = "nam">Assignment Name:</label>
        <input type="text" id='assignname' name="assignname" placeholder="Assignment Name" />
        </div> 
        <div className='rightSide3'> 
        <label for='id' class="form-label"> School ID</label>
        <input type="text" id='id' name="id" placeholder="ID" />
        
        
        <label for='date' class="form-label">Assignment Due Date</label>
        <input type="text" id='date' name="date" placeholder="YYYY-MM-DD" />
        </div>
        <div className='rightSide2'>
        <label for="time" class="form-label">Assignment Time Due</label>
        <input type="text" id='time' name="time" placeholder="HH-MM-SS" />
        
        
        <label for='poi' class="form-label"> Assignment Points Worth</label>
        <input type="text" id='poi' name="poi" placeholder="00pts" />
        </div>
        <div className='leftSide'>
        <label for='desc ' class="form-label">Assignment Description</label>
        <textarea type="text" id='desc' name="desc" placeholder="description" />
        
        <button type="submitbutton" id="submitAssignment">Submit</button>
        </div>
  </form>
      </div>
      
      )}
    </div>
  );
}

export default CourseWork;