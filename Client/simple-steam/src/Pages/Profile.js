import React, { useState } from "react";
import axios from "axios";
import Client from "../services/api";

export default function UpdateProfile(user, authenticated) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUpdateUsername = async (event) => {
    event.preventDefault();

    try {
      const response = await Client.put(`/api/users/${user.user.id}`, {
        username,
      });
      setSuccessMessage(response.data.msg);
      setUsername("");
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
      setEmail("");
    } catch (error) {
      setErrorMessage(error.response.data.msg);
    }
  };

  const handleUpdatePassword = async (event) => {
    event.preventDefault();

    try {
      console.log(user.user.id);
      const response = await Client.put(`/api/users/${user.user.id}`, {
        password,
      });
      setSuccessMessage(response.data.msg);
      setPassword("");
    } catch (error) {
      setErrorMessage(error.response.data.msg);
    }
  };

  return (
    <div>
      <h2 className="title">Update Profile</h2>

      <div className="profile-wrapper">
        <div className="profile-container">
          <form
            onSubmit={handleUpdateUsername}
            action="/api/users"
            method="put"
          >
            <div className="input-wrapper-profile">
            <h3 className="card-title">Update Username</h3>
            <label className="user-password">
              New Username:
              <input
                placeholder="New Username"
                className="register-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              
            </label>
            <button className="update-button" type="submit">
              Update Username
            </button>
            </div>
          </form>

          <form onSubmit={handleUpdateEmail}>
            <div className="input-wrapper-profile">
            <h3 className="card-title">Update Email</h3>
            <label className="user-password">
              New Email:
              <input
                placeholder="New Email"
                className="register-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <button className="update-button" type="submit">
              Update Email
            </button>
            </div>
          </form>
        
          <form onSubmit={handleUpdatePassword}>
            <div className="input-wrapper-profile">
            <h3 className="card-title">Update Password</h3>
            <label className="user-password">
              New Password:
              <input
                placeholder="New Password"
                className="register-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button className="update-button" type="submit">
              Update Password
            </button>
            </div>
          </form>

          {successMessage && <p>{successMessage}</p>}
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}


// action="/api/users" method="put"






















