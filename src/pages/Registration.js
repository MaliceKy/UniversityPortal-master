import React from 'react';
import "../styles/Registration.css";

function Registration() {
    const courses = [
        { name: 'Register for Dark Arts', description: 'Dark Arts', description2: 'Teacher: Dr. Snape - Schedule: MWF'},
        { name: 'Register for Charms', description: 'Charms', description2: 'Teacher: Prof. Flitwick - Schedule: TTH'},
        { name: 'Register for Potions ', description: 'Potions', description2: 'Teacher: Prof. Slughorn - Schedule: MWF'},
        { name: 'Register for Xylomancy', description: 'Xylomancy', description2: 'Teacher: Prof. Trelawney - Schedule: TTH'},
    ];

    const handleCourseClick = (event) => {
        console.log('Course clicked:', event.target.innerText);
        // Add your code to handle the course click event here
    };

    const courseButtons = courses.map((course) => (
      <div key={course.name} className="course-cardReg">
        <p>{course.description}</p>
        <p className="description2">{course.description2}</p>
        <button 
          className="course-button" 
          onClick={handleCourseClick}
          key={course.name}
        >
          {course.name}
        </button>
      </div>
    ));

    return (
        <div className="registration-text"style={{marginTop: '40px'}}>
            <h2>Register for classes!</h2>
            <div className="course-list" style={{marginTop: '100px'}}>
                {courseButtons}
            </div>
        </div>
    )
}

export default Registration;