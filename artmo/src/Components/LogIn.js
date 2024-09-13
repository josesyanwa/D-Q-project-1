import React, { useState } from 'react';
import './LogIn.css';

const Login = ({onRequestClose}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Add your login logic here, e.g., send a request to authenticate user credentials
    console.log('Username:', username);
    console.log('Password:', password);
    // You can replace the console logs with your actual authentication logic
  };

  return (
    <div className="login-container">
      <div>
         {/* Your SignUp component UI and logic here */}
        <button className="close-button" onClick={onRequestClose}>
         &times; {/* "x" character for a cross icon */}
        </button>
       </div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
