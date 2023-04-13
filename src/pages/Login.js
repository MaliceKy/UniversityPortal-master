import { useState } from 'react';
import "../styles/Login.css";

import Data from '../data/login.json';

function LogPage({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = Data.find(user => user.email === email && user.pass === pass);

    if (user) {
      onLoginSuccess(user);
    } else {
      setErrorMsg('You entered an invalid email or password, please try again!');
    }
  }

  return (
    <div className='Page'>
      <form className="login-form" id="login" onSubmit={handleSubmit}>
        <h1>School Portal Login</h1>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Example@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
        <button type="submit" id="submit">Log In</button>
        {errorMsg && <p className="error-msg">{errorMsg}</p>}
      </form>
    </div>
  );
}

export default LogPage;


