import React from 'react';
import Headr from "./components/Headr.js";
import Footr from "./components/Footr.js";
import "./styles/Login.css";

//email or username???? What r the requirments? 
function LogPage() {
    return (
      <div className='Page' >
        <div className="head">
        <Headr /> 
        </div>
        
        <div className= "box">
            <label for ="name"> Username</label>
            <input type = "text" id = "name" name= "text" placeholder='Enter Username'></input>
            <br></br>
            <label for ="passw">Password</label>
            <input type = "password" id = "pass" name= "text" placeholder='Enter Username'></input>

            <button name="button" id="button">Submit</button>
            

        </div>

        <div className="foot">
        <Footr /> 
        </div>


      </div>

  
    );
  }


export default LogPage