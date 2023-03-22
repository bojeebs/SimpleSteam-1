
import React, { useState } from 'react';
import axios from 'axios';

export default function UpdateProfile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUpdateUsername = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put('/api/profile', {
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
      const response = await axios.put('/api/profile', {
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
      const response = await axios.put('/api/profile', {
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
      <form onSubmit={handleUpdateUsername}>
      {/* <form onSubmit={handleUpdateUsername} action="/api/profile" method="put"> */}
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























// import UpdateProfile from './UpdateProfile';

// export default function Profile() {
//   return (
//     <div>
//       <h1>Profile Page</h1>
//       <UpdateProfile />
//     </div>
//   );
// }


//  export default function Profile() {
// const { user, updateUserProfile } = useAuth();

//  const [editingUsername, setEditingUsername] = useState(false);
// const [editingPassword, setEditingPassword] = useState(false);
// const [editingEmail, setEditingEmail] = useState(false);

// const handleUpdateUsername = (newUsername) => {
//  updateUserProfile({ displayName: newUsername })
//  .then(() => setEditingUsername(false))
//  .catch((error) => console.log(error));
//   };

//   const handleUpdatePassword = (newPassword) => {
//    Send request to update password
//    };


//   const handleUpdateEmail = withAuth(async (newEmail) => {
//     try {
//       // Call the middleware function before calling the updateUserProfile function
//       const updatedEmail = await middlewareFunction(newEmail);
//       updateUserProfile({ email: updatedEmail });
//       setEditEmail(false);
//     } catch (error) {
//       console.log(error);
//     }
//   });

//   return (
//     <div>
//       <h1>Profile Page</h1>
//       <p>Username: {user.displayName}</p>
//       {editUsername ? (
//         <EditUsernameForm
//           username={user.displayName}
//           onSubmit={handleUpdateUsername}
//           onCancel={() => setEditUsername(false)}
//         />
//       ) : (
//         <button onClick={() => setEditUsername(true)}>Edit Username</button>
//       )}
//       <p>Email: {user.email}</p>
//       {editEmail ? (
//         <EditEmailForm
//           email={user.email}
//           onSubmit={handleUpdateEmail}
//           onCancel={() => setEditEmail(false)}
//           />
//           ) : (
//           <button onClick={() => setEditEmail(true)}>Edit Email</button>
//           )}
//           <p>Password: *****</p>
//           {editPassword ? (
//           <EditPasswordForm
//           onSubmit={handleUpdatePassword}
//           onCancel={() => setEditPassword(false)}
//           />
//           ) : (
//           <button onClick={() => setEditPassword(true)}>Edit Password</button>
//           )}
//           </div>
//           );
// }


