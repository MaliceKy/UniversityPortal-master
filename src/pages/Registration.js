import React from 'react';
import "../styles/Registration.css";
import NavigationButtons from '../components/NavigationButtons';


function Registration({ currentUser, setCurrentPage, userId }) {

    const courses = [
        { button: 'Register for Dark Arts', course: 'Dark Arts', description1: 'Teacher: Dr. Snape - Schedule: MWF', courseID: 106},
        { button: 'Register for Charms', course: 'Charms', description1: 'Teacher: Prof. Flitwick - Schedule: TTH', courseID: 108},
        { button: 'Register for Potions ', course: 'Potions', description1: 'Teacher: Prof. Slughorn - Schedule: MWF', courseID: 107},
        { button: 'Register for Xylomancy', course: 'Xylomancy', description1: 'Teacher: Prof. Trelawney - Schedule: TTH',courseID: 109},
    ];

    const handleCourseClick = (event) => {
      
    };

    const courseButtons = courses.map((course) => (
      
      <div key={course.button} className="course-cardReg">
        <p>{course.course}</p>
        <p className="description1">{course.description1}</p>
        <button 
          className="course-button" 
          onClick={handleCourseClick}
          key={course.button}
        >
          {course.button}
        </button>
      </div>
    ));

    return (
      <div>
      <NavigationButtons setCurrentPage={setCurrentPage} />
      <div className="registration-text" style={{ marginTop: '40px' }}>
        <h2>Register for classes!</h2>
        <div className="course-list" style={{ marginTop: '100px' }}>
          {courseButtons}
        </div>
      </div>
    </div>
    );
}

export default Registration;