import React from 'react';
import NavigationButtons from '../components/NavigationButtons';
import '../styles/Accessibility.css';

function Accessibility({ userId, userRole, setCurrentPage }) {
  async function handleSubmit(event) {
    event.preventDefault();

    const courseData = {
      courseName: event.target.courseName.value,
      courseID: event.target.CourseID.value,
      teachersID: event.target.teachersID.value,
      teacher: event.target.teachersName.value,
      description: event.target.description.value,
      classRoom: event.target.classRoom.value,
      classDays: event.target.classDays.value, // Add classDays
      classTime: event.target.classTime.value,
    };

    try {
      const response = await fetch('http://localhost:3001/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      });

      if (response.ok) {
        alert('Course added successfully');
      } else {
        alert('Error adding course');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding course');
    }
  }

  if (userRole === 'teacher') {
    return (
      <div id="access-container">
        <NavigationButtons userRole={userRole} setCurrentPage={setCurrentPage} />
        <div>
          <p className="Create-class-text">Would you like to Create a Class?</p>

          <form id="courseForm" onSubmit={handleSubmit}>
            <label htmlFor="courseName" className="form-label1" id="nam">
              Course Name:
            </label>
            <input type="text" id="courseName" name="courseName" placeholder="Course Name" />

            <label htmlFor="CourseID" className="form-label1">
              {' '}
              Course ID:
            </label>
            <input type="text" id="CourseID" name="CourseID" placeholder="Courses ID" />

            <label htmlFor="teachersID" className="form-label1">
              {' '}
              Teachers ID:
            </label>
            <input type="text" id="teachersID" name="teachersID" placeholder="Teachers ID" />

            <label htmlFor="teachersName" className="form-label1">
              Your Name:
            </label>
            <input type="text" id="teachersName" name="teachersName" placeholder="Teachers Name" />

            <label htmlFor="description" className="form-label1">
              Description:
            </label>
            <textarea type="text" id="description" name="description" placeholder="description" />

            <label htmlFor="classRoom" className="form-label1">
              Classroom number:
            </label>
            <input type="text" id="classRoom" name="classRoom" placeholder="Description" />

            <label htmlFor="classDays" className="form-label1">
              Class Days:
            </label>
            <input type="text" id="classDays" name="classDays" placeholder="Class Days" />

            <label htmlFor="classTime" className="form-label1">
              Class Time:
            </label>
            <input type="text" id="classTime" name="classTime" placeholder="ClassTime" />

            <button type="submit" id="submitAssignment">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div>
      <NavigationButtons userRole={userRole} setCurrentPage={setCurrentPage} />
      <div>Access restricted. You must be a teacher to create a class.</div>
    </div>
    );
}
}

export default Accessibility;

