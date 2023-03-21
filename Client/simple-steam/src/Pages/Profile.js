import { useState } from 'react';
import { UpdateProfile } from '../services/Auth'

 import { useAuth, withAuth } from 'your-authentication-library';

export default function Profile() {
  const { user, updateUserProfile } = useAuth();


 import { useAuth, withAuth } from 'your-authentication-library';



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
//       setEditingEmail(false);
//     } catch (error) {
//       console.log(error);
//     }
//   });


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
//       setEditingEmail(false);
//     } catch (error) {
//       console.log(error);
//     }
//   });


//   return (
//     <div>
//       <h1>Profile Page</h1>
//       <p>Username: {user.displayName}</p>
//       {editingUsername ? (
//         <EditUsernameForm
//           username={user.displayName}
//           onSubmit={handleUpdateUsername}
//           onCancel={() => setEditingUsername(false)}
//         />
//       ) : (
//         <button onClick={() => setEditingUsername(true)}>Edit Username</button>
//       )}
//       <p>Email: {user.email}</p>
//       {editingEmail ? (
//         <EditEmailForm
//           email={user.email}
//           onSubmit={handleUpdateEmail}
//           onCancel={() => setEditingEmail(false)}
//           />
//           ) : (
//           <button onClick={() => setEditingEmail(true)}>Edit Email</button>
//           )}
//           <p>Password: *****</p>
//           {editingPassword ? (
//           <EditPasswordForm
//           onSubmit={handleUpdatePassword}
//           onCancel={() => setEditingPassword(false)}
//           />
//           ) : (
//           <button onClick={() => setEditingPassword(true)}>Edit Password</button>
//           )}
//           </div>
//           );
// }

//    const handleUpdateEmail = (newEmail) => {     updateUserProfile({ email: newEmail })
//        .then(() => setEditingEmail(false))
//        .catch((error) => console.log(error));
//    };

//    return (
//     <div>
//        <h1>Profile Page</h1>
//        <p>Username: {user.displayName}</p>
// //       {editingUsername ? (
// //         <EditUsernameForm
// //           username={user.displayName}
// //           onSubmit={handleUpdateUsername}
// //           onCancel={() => setEditingUsername(false)}
// //         />
// //       ) : (
// //         <button onClick={() => setEditingUsername(true)}>Edit Username</button>
// //       )}
// //       <p>Email: {user.email}</p>
// //       {editingEmail ? (
// //         <EditEmailForm
// //           email={user.email}
// //           onSubmit={handleUpdateEmail}
// //           onCancel={() => setEditingEmail(false)}
// //           />
// //           ) : (
// //           <button onClick={() => setEditingEmail(true)}>Edit Email</button>
// //           )}
// //           <p>Password: *****</p>
// //           {editingPassword ? (
// //           <EditPasswordForm
// //           onSubmit={handleUpdatePassword}
// //           onCancel={() => setEditingPassword(false)}
// //           />
// //           ) : (
// //           <button onClick={() => setEditingPassword(true)}>Edit Password</button>
// //           )}
// //           </div>
// //           );
// //           }


