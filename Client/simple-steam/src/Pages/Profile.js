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
      <h2>Update Profile</h2>

    

      <form onSubmit={handleUpdateUsername} action="/api/users" method="put" >
        <h3>Update Username</h3>
        <label>
          New Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <button type="submit">Update Username</button>
      </form>

      <form onSubmit={handleUpdateEmail}>
        <h3>Update Email</h3>
        <label>
          New Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Update Email</button>
      </form>

      <form onSubmit={handleUpdatePassword}>
        <h3>Update Password</h3>
        <label>
          New Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Update Password</button>
      </form>

      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}





// action="/api/users" method="put"

















