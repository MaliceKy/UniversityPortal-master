import React, { useState } from 'react';
import './styles/App.css';
/*rfce*/

import Login from './pages/Login';
import Pages from './pages/Course';
import School from './pages/School';
import Header from './components/Headr';
import Student from './pages/Student';
import Teacher from './pages/Teacher';

function App() {
  const [currentPage, setCurrentPage] = useState('school');

  const handleLoginSuccess = () => {
    setCurrentPage('courses');
  };
 
  let content;
  if (currentPage === 'school') {
    content = <School setCurrentPage={setCurrentPage} />;
  } else if (currentPage === 'login') {
    content = <Login onLoginSuccess={handleLoginSuccess} />;
  } else if (currentPage === 'courses') {
    content = <Pages setCurrentPage={setCurrentPage} />;
  } else if (currentPage === 'student') {
    content = <Student setCurrentPage={setCurrentPage} />;
  }else if (currentPage === 'teacher') {
    content = <Teacher setCurrentPage={setCurrentPage} />;
  }

  

  return (
    <div className='App'>
      <Header isSchool={currentPage === 'school'} />
      {content}
    </div>
  );
}

export default App;