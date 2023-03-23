import { Data } from "../Data";
import React, { useState } from 'react';
import Client from '../services/api'
import '../styles/Profile.css'

export default function UpdateProfile({user, authenticated}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
 

  const handleUpdateUsername = async (event) => {
    event.preventDefault();

    try {
      const response = await Client.put(`/api/users/${user.id}`, {
        username,
      });
      const test = response.data.msg;
      console.log(test);
      setSuccessMessage(response.data.msg);
      setUsername('');
    } catch (error) {
      setErrorMessage(error.response.data.msg);
    }
  

  };

  const handleUpdateEmail = async (event) => {
    event.preventDefault();

    try {
      const response = await Client.put(`/api/users/${user.id}`, {
        email,
      });
      setSuccessMessage(response.data.msg);
      setEmail('');
    } catch (error) {
      setErrorMessage(error.response.data.msg);
    }

    console.log(test);
  };
  

  const handleUpdatePassword = async (event) => {
    event.preventDefault();
console.log(user)
    try {
      const response = await Client.put(`/api/users/${user.id}`, {
        password,
      });
      setSuccessMessage(response.data.msg);
      setPassword('');
    } catch (error) {
      setErrorMessage(error.response.data.msg);

      console.log(test);
    }
    console.log(test);
  };

  return (
      <div className="update-container">
        <h2 className="form-heading">Update Profile</h2>
        <form onSubmit={handleUpdateUsername} action="/api/profile" method="put">
          <h3 className="form-titleone">Update Username</h3>
          <label>
            
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required className="input-field" />
          </label>
          <button className="update-button" type="submit">Submit</button>
        </form>
  
        <form onSubmit={handleUpdateEmail}>
          <h3 className="form-titletwo">Update Email</h3>
          <label>
            
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input-field" />
          </label>
          <button className="update-button" type="submit">Submit</button>
        </form>
  
        <form onSubmit={handleUpdatePassword}>
          <h3 className="form-titlethree">Update Password</h3>
          <label>
            
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input-field" />
          </label>
        <button className="update-button" type="submit">Submit</button>
      </form>

      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}























