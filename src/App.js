import React, { useState } from 'react';
import './styles/App.css';

import Login from './pages/Login';
import Pages from './pages/Course';
import School from './pages/School';
import Header from './components/Headr';
import Profile from './pages/Profile';

function App() {
  const [currentPage, setCurrentPage] = useState('school');
  const [userRole, setUserRole] = useState('');
  const [userId, setUserId] = useState(null);

  const handleLoginSuccess = (user) => {
    setUserRole(user.role);
    setUserId(user.ID);
    setCurrentPage('courses');
  };

  let content;
  if (currentPage === 'school') {
    content = <School setCurrentPage={setCurrentPage} />;
  } else if (currentPage === 'login') {
    content = <Login onLoginSuccess={handleLoginSuccess} />;
  } else if (currentPage === 'courses') {
    content = <Pages setCurrentPage={setCurrentPage} userRole={userRole} />;
  } else if (currentPage === 'profile') {
    content = <Profile currentUser={userId} setCurrentPage={setCurrentPage} />;
  }

  return (
    <div className='App'>
      <Header isSchool={currentPage === 'school'} />
      {content}
    </div>
  );
}

export default App;

