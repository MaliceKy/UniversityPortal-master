import { useState } from 'react';

import React from 'react';
import Headr from "../components/Headr.js";
import Footr from "../components/Footr.js";
import "../styles/Login.css";

import Data from '../data/login.json';

function LogPage({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = Data.find(user => user.email === email && user.pass === pass);

    if (user) {
      onLoginSuccess();
    } else {
      console.log('Invalid email or password');
    }
  }

  // Return the JSX structure of the component
  return (
    <div className='Page'>
      <div className="head">
        <Headr />
      </div>
      <form className="login-form" id="login" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter Password" id="password" name="password" />
        <button type="submit" id="submit">Log In</button>
      </form>

      <div className="foot">
        <Footr />
      </div>
    </div>
  );
}

export default LogPage;
