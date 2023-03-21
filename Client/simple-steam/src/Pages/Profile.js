import { useAuth } from 'your-authentication-library';

export default function Profile() {
  const { user, updateUserProfile } = useAuth();

  const [editingUsername, setEditingUsername] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);

  const handleUpdateUsername = (newUsername) => {
    updateUserProfile({ displayName: newUsername })
      .then(() => setEditingUsername(false))
      .catch((error) => console.log(error));
  };

  const handleUpdatePassword = (newPassword) => {
    // Send request to update password
  };

  const handleUpdateEmail = (newEmail) => {
    updateUserProfile({ email: newEmail })
      .then(() => setEditingEmail(false))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Username: {user.displayName}</p>
      {editingUsername ? (
        <EditUsernameForm
          username={user.displayName}
          onSubmit={handleUpdateUsername}
          onCancel={() => setEditingUsername(false)}
        />
      ) : (
        <button onClick={() => setEditingUsername(true)}>Edit Username</button>
      )}
      <p>Email: {user.email}</p>
      {editingEmail ? (
        <EditEmailForm
          email={user.email}
          onSubmit={handleUpdateEmail}
          onCancel={() => setEditingEmail(false)}
          />
          ) : (
          <button onClick={() => setEditingEmail(true)}>Edit Email</button>
          )}
          <p>Password: *****</p>
          {editingPassword ? (
          <EditPasswordForm
          onSubmit={handleUpdatePassword}
          onCancel={() => setEditingPassword(false)}
          />
          ) : (
          <button onClick={() => setEditingPassword(true)}>Edit Password</button>
          )}
          </div>
          );
          }
