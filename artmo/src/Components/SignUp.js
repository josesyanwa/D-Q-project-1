// SignUp.js
import React, { useState} from 'react';
import './SignUp.css';

function SignUp({onClose}) {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');

  // Handle form submission
  function handleSignUp(e) {
    e.preventDefault(); e.preventDefault(); 
    // Add your logic for handling the sign-up data
    console.log('Sign-up data:', { email, username, password, dob });
    // Close the modal or perform any other actions after signing up
    onClose();
  }

  return (
    <div className="signup-modal">
       
       <div>
         {/* Your SignUp component UI and logic here */}
        <button className="close-button" onClick={onClose}>
         &times; {/* "x" character for a cross icon */}
        </button>
       </div>
       <h2>Sign Up</h2>
       <form onSubmit={handleSignUp}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </label>
        <br />
        <button type="submit" >Sign Up</button>
       </form> 


         {/* <div className="background-image">
        
        </div> */}
    </div>
  );
}

export default SignUp;
