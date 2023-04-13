import React, { useState } from 'react';
import './styles/App.css';

import Login from './pages/Login';
import Pages from './pages/Course';
import School from './pages/School';
import Header from './components/Headr';

function App() {
  const [currentPage, setCurrentPage] = useState('school');
  const [userRole, setUserRole] = useState('');

  const handleLoginSuccess = (user) => {
    setUserRole(user.role);
    setCurrentPage('courses');
  };

  let content;
  if (currentPage === 'school') {
    content = <School setCurrentPage={setCurrentPage} />;
  } else if (currentPage === 'login') {
    content = <Login onLoginSuccess={handleLoginSuccess} />;
  } else if (currentPage === 'courses') {
    content = <Pages setCurrentPage={setCurrentPage} userRole={userRole} />;
  }

  return (
    <div className='App'>
      <Header isSchool={currentPage === 'school'} />
      {content}
    </div>
  );
}

export default App;
