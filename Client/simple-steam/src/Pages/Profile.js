import { useState } from 'react';
import { UpdateProfile } from '../services/Auth'

export default function Profile() {
  const { user, updateUserProfile } = useAuth();

  const [editUsername, setEditUsername] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [editEmail, setEditEmail] = useState(false);

  const handleUpdateUsername = (newUsername) => {
    updateUserProfile({ displayName: newUsername })
      .then(() => setEditingUsername(false))
      .catch((error) => console.log(error));
  };

  const handleUpdatePassword = (newPassword) => {
    // Send request to update password
  };

  const handleUpdateEmail = withAuth(async (newEmail) => {
    try {
      // Call the middleware function before calling the updateUserProfile function
      const updatedEmail = await middlewareFunction(newEmail);
      updateUserProfile({ email: updatedEmail });
      setEditEmail(false);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Username: {user.displayName}</p>
      {editUsername ? (
        <EditUsernameForm
          username={user.displayName}
          onSubmit={handleUpdateUsername}
          onCancel={() => setEditUsername(false)}
        />
      ) : (
        <button onClick={() => setEditUsername(true)}>Edit Username</button>
      )}
      <p>Email: {user.email}</p>
      {editEmail ? (
        <EditEmailForm
          email={user.email}
          onSubmit={handleUpdateEmail}
          onCancel={() => setEditEmail(false)}
          />
          ) : (
          <button onClick={() => setEditEmail(true)}>Edit Email</button>
          )}
          <p>Password: *****</p>
          {editPassword ? (
          <EditPasswordForm
          onSubmit={handleUpdatePassword}
          onCancel={() => setEditPassword(false)}
          />
          ) : (
          <button onClick={() => setEditPassword(true)}>Edit Password</button>
          )}
          </div>
          );
}