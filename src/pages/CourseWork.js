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
      } else if (userRole === 'teacher') {
        const teachingCourses = CourseData.filter(course => course.teacher === userId);
        setCourses(teachingCourses);
      }
  
      // Get assignments for user
      const userAssignments = AssignmentData.filter(assignment => assignment.courseID);
      setAssignments(userAssignments);
    }, [userRole, userId]);
  
    return (
      <div>
        <NavigationButtons setCurrentPage={setCurrentPage} />
        <div className="course-list">
          {courses.map(course => {
            // Get assignments for this course and sort by due date
            const courseAssignments = assignments
            .filter(assignment => assignment.courseID === course.courseID)
            .sort((a, b) => new Date(a.assignmentDueDate) - new Date(b.assignmentDueDate));
  
            return (
              <div key={course.courseID} className="course-card">
                <h4>{course.courseName}</h4>
                <h2>Your assignments</h2>
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
      </div>
    );
  }

export default CourseWork