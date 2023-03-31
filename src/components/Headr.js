import React from 'react';
import "../styles/Headr.css";
import logo from '../images/HogLogo.png';


//in the components folder im putting stuff were gonna use on every page
//footer, header, signout ect
function headerNav() {
  return (
    <div className='header'>
      Hogwarts University
      <img src={logo} alt="Logo" className="logo" />
    </div>
  )
}

export default headerNav
