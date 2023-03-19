// import { useState } from 'react'
// // import { SignInUser } from '../services/Auth'
// import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'




const Login = (props) => {
    let navigate = useNavigate()
  
    const [formValues, setFormValues] = useState({ email: '', password: '' })
  
    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
       const payload = await LogInUser(formValues)
    
      setFormValues({ email: '', password: '' })
     
       props.setUser(payload)

       props.toggleAuthenticated(true)
      
      navigate('/main')
    }
  
    return (
      <div className="signin col">
        <div className="card-overlay centered">
          <form className="col" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                value={formValues.password}
                required
              />
            </div>
            <button disabled={!formValues.email || !formValues.password}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    )
  }
  
  export default Login



//   import { useState } from 'react';

 
// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedin, setIsLoggedin] = useState(false);
 
//   const login = (e) => {
//     e.preventDefault();
//     console.log(name, email, password);
//     const userData = {
//       name,
//       email,
//       password,
//     };
//     localStorage.setItem('token-info', JSON.stringify(userData));
//     setIsLoggedin(true);
//     setName('');
//     setEmail('');
//     setPassword('');
//   };
 
//   const logout = () => {
//     localStorage.removeItem('token-info');
//     setIsLoggedin(false);
//   };
 
//   return (
//     <>
//       <div style={{ textAlign: 'center' }}>
//         <h1>This is React WebApp </h1>
//         {!isLoggedin ? (
//           <>
//             <form action="">
//               <input
//                 type="text"
//                 onChange={(e) => setName(e.target.value)}
//                 value={name}
//                 placeholder="Name"
//               />
//               <input
//                 type="email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 placeholder="Email"
//               />
//               <input
//                 type="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//                 placeholder="Password"
//               />
//               <button type="submit" onClick={login}>
//                 GO
//               </button>
//             </form>
//           </>
//         ) : (
//           <>
//             <h1>User is logged in</h1>
//             <button onClickCapture={logout}>logout user</button>
//           </>
//         )}
//       </div>
//     </>
//   );
// }
 
// export default App;