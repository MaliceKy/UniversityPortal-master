

import React from 'react';
import '../styles/Accessibility.css';



function Accessibility({userId, userRole, setCurrentPage }) {

  return (

    <div id = "access-container">
        
      <div >

        Would you like to Enter a Class?
        <h2>Complete the following</h2>
        
        <form id = "courseForm">
        
        <label for='courseName' class="form-label1" id = "nam">Course Name:</label>
        <input type="text" id='courseName' name="courseName" placeholder="Course Name" />
   
     
        <label for='CourseID' class="form-label1"> Course ID</label>
        <input type="text" id='CourseID' name="CourseID" placeholder="Courses ID" />
        
        <label for='teachersID' class="form-label1"> Teachers ID</label>
        <input type="text" id='teachersID' name="teachersID" placeholder="Teachers ID" />
        
        <label for='teachersName' class="form-label1">Your Name</label>
        <input type="text" id='teachersName' name="teachersName" placeholder="Teachers Name" />
    
        <label for="description" class="form-label1">Description</label>
        <textarea type="text" id='description' name="description" placeholder="description" />

        <label for='classRoom' class="form-label1">Classroom number</label>
        <input type="text" id='classRoom' name="classRoom" placeholder="Description" />

        <label for='classTime ' class="form-label1">Class Time</label>
        <input type="text" id='classTime' name="classTime" placeholder="ClassTime" />
        
        <button type="submitbutton" id="submitAssignment">Submit</button>
        
  </form>
      </div>
      
     
    </div>
  );
}

export default Accessibility