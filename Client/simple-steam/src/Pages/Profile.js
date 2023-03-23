import React, { useState } from 'react';
import axios from 'axios';
import Client from '../services/api'

export default function UpdateProfile(user, authenticated) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUpdateUsername = async (event) => {
    event.preventDefault();

    try {
      const response = await Client.put(`/api/users/${user.user.id}`, {
        username,
      });
      setSuccessMessage(response.data.msg);
      setUsername('');
    } catch (error) {
      setErrorMessage(error.response.data.msg);
    }
  };

  const handleUpdateEmail = async (event) => {
    event.preventDefault();

    try {
      const response = await Client.put(`/api/users/${user.user.id}`, {
        email,
      });
      setSuccessMessage(response.data.msg);
      setEmail('');
    } catch (error) {
      setErrorMessage(error.response.data.msg);
    }
  };

  const handleUpdatePassword = async (event) => {
    event.preventDefault();

    try {
      console.log(user.user.id)
      const response = await Client.put(`/api/users/${user.user.id}`, {
        password,
      });
      setSuccessMessage(response.data.msg);
      setPassword('');
    } catch (error) {
      setErrorMessage(error.response.data.msg);
    }
  };

  return (
    <div>
      <h2 className='title'>Update Profile</h2>

      <div className='register-wrapper'>
        
      <div className="register-container">
    

      <form onSubmit={handleUpdateUsername} action="/api/users" method="put" >
        <h3>Update Username</h3>
        <label className='user-password'>
          New Username:
          <input className='register-input' type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <button className='update-button' type="submit">Update Username</button>
      </form>

      <form onSubmit={handleUpdateEmail}>
        <h3>Update Email</h3>
        <label className='user-password'>
          New Email:
          <input className='register-input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button className='update-button' type="submit">Update Email</button>
      </form>

      <form onSubmit={handleUpdatePassword}>
        <h3>Update Password</h3>
        <label className='user-password'>
          New Password:
          <input className='register-input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button className='update-button' type="submit">Update Password</button>
      </form>

      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
    </div>
    </div>
  );
}





// action="/api/users" method="put"

















