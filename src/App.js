import React, { useState } from 'react';
import './App.css';

import LogPage from "./pages/Login.js";
import School from './pages/School.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {loggedIn ? <School /> : <LogPage onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
}

export default App; 

// random comment