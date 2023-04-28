
import { useState, useEffect } from 'react';
import React from 'react';
import '../styles/CourseWork.css';
import NavigationButtons from '../components/NavigationButtons';
import AssignmentData from '../data/assignments.json';
import CourseData from '../data/courses.json';



function CourseWork({ userId, userRole, setCurrentPage, currentUser}) {
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Get courses
    if (userRole === 'student') {
      const enrolledCourses = CourseData.filter((course) =>
        course.studentsEnrolledArray.includes(userId)
      );
      setCourses(enrolledCourses);
      const userAssignments = AssignmentData.filter((assignment) =>
        assignment.courseID
      ).sort((a, b) => new Date(a.assignmentDueDate) - new Date(b.assignmentDueDate)); 
      setAssignments(userAssignments);
    } else if (userRole === 'teacher') {
      const teachingCourses = CourseData.filter(
        (course) => course.teachersID === userId
      );
      setCourses(teachingCourses);
      const teacherAssignments = AssignmentData.filter(
        (assignment) => assignment.teachersID === userId
      ).sort((a, b) => new Date(a.assignmentDueDate) - new Date(b.assignmentDueDate)); // its supposed to sort assignments by due date 
      setAssignments(teacherAssignments);
    }
    // Get assignments for user
  }, [userRole, userId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("not").style.display = "none";
    document.getElementById("submitMessage").innerHTML = "Thank you for your submission!";
  }

  //this is how we get the data that the teacher inputted to insert into the file
  const handleAddAssignment = async (event) => {
    event.preventDefault();
    const newAssignment = {
      assignmentName: event.target.assignmentName.value,
      teachersID: event.target.teachersID.value,
      assignmentDueDate: event.target.duedate.value,
      assignmentDueTime: event.target.duetime.value,
      assignmentWorth: event.target.pointsworth.value,
      assignmentDescription: event.target.description.value,
      courseID: event.target.course.value,
    };
  
    try {
      const response = await fetch('/api/assignments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAssignment),
      });
  
      if (response.ok) {
        document.getElementById("submitMessage").innerHTML = "Assignment added successfully!";
        setAssignments([...assignments, newAssignment]);
      } else {
        throw new Error("Error adding assignment");
      }
    } catch (error) {
      document.getElementById("submitMessage").innerHTML = error.message;
    }
  };

  const handleDeleteAssignment = async (assignment) => {
    try {
      const response = await fetch(`/api/assignments/${assignment.assignmentName}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const responseData = await response.json();
        setAssignments(responseData.data);
      } else {
        throw new Error('Error deleting assignment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <NavigationButtons userRole={userRole} setCurrentPage={setCurrentPage} />
      <div className="coursework-list" id = "test">
        {courses.map((courses) => {
          // Get assignments for this course and sort by due date
          const courseAssignments = assignments
          .filter(assignment => assignment.courseID === courses.courseID);

            return (
              <div key={courses.courseID} className="coursework-card">
                <h3>{courses.courseName}</h3>
                <hr />
                <div className="assignments-container">
                  {courseAssignments.map((assignment) => (
                    <div key={assignment.assignmentName} className="assignment">
                      <h4>{assignment.assignmentName}</h4>
                      <p>Due: {assignment.assignmentDueDate}</p>
                      <p> at {assignment.assignmentDueTime}</p>
                      <p>Worth: {assignment.assignmentWorth} points</p>
                      <p>{assignment.assignmentDescription}</p>
                      {userRole === 'student' && (
                        <form onSubmit={handleSubmit}>
                          <input type="file" id="not" accept=".doc,.docx,.pdf" />
                          <button type="submit" id="studentSubmit">Submit</button>
                        </form>
                      )}
                      {userRole === 'teacher' && (
                        <button className="delete-assignment" onClick={() => handleDeleteAssignment(assignment)}>
                        Delete Assignment
                      </button>
                      )}
                    </div>
                  ))}
                </div>
                {userRole === 'teacher' && (
                  <div className="add-assignment">
                    <form onSubmit={handleAddAssignment}>
                      <input type="hidden" name="course" value={courses.courseID} />
                      <input type="hidden" name="teachersID" value={userId} />
                      <input type="text" name="assignmentName" placeholder="Assignment Name" required />
                      <input type="date" name="duedate" placeholder="Due Date" required />
                      <input type="time" name="duetime" placeholder="Due Time" required />
                      <input type="number" name="pointsworth" placeholder="Points Worth" required />
                      <textarea name="description" placeholder="Description" required></textarea>
                      <button type="submit" class="add-assignment-btn">Add Assignment</button>
                    </form>
                  </div>
                )}
              </div>
            );
        })}
      </div>
      <p id="submitMessage"></p>
    </div>
  );
}

export default CourseWork;

