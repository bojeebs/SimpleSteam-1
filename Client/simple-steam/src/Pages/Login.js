 import { useState } from 'react'
 import { LoginUser } from '../services/Auth'
 import { useNavigate } from 'react-router-dom'


 import {Link} from 'react-router-dom'




const Login = (props) => {
    let navigate = useNavigate()
  
    const [formValues, setFormValues] = useState({ userName: '', password: '' })
  
    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.userName]: e.target.value })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
       const payload = await LoginUser(formValues)
    
      setFormValues({ userName: '', password: '' })
     
       props.setUser(payload)

       props.toggleAuthenticated(true)
      
      navigate('/Home')
    }
  
    return (
      <div className="login-container">
          
          <div>
            <h1>Login</h1>
       </div>

      <div className="signin col">
        <div className="card-overlay centered">
          <form className="col" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                onChange={handleChange}
                name="username"
                type="username"
                placeholder="username"
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
            <button disabled={!formValues.userName|| !formValues.password}>
              Sign In
            </button>
            <footer>
              <h4>Don't have an account? <Link to="/register">Join SimpleSteam</Link> </h4>
            </footer>
          </form>
          
        </div>
        </div>
      </div>
    )
  }
  
  export default Login






  

 
// function App() {
//   const [userName, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedin, setIsLoggedin] = useState(false);
 
//   const login = (e) => {
//     e.preventDefault();
//     console.log(userName, email, password);
//     const userData = {
//       userName,
//       password,
//       email,
//     };
//     localStorage.setItem('token-info', JSON.stringify(userData));
//     setIsLoggedin(true);
//     setUsername('');
//     setPassword('');
//     setEmail('');
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
//                 onChange={(e) => setUsername(e.target.value)}
//                 value={name}
//                 placeholder="Username"
//               />
//               <input
//                 type="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//                 placeholder="Password"
//               />
//               <input
//                 type="email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 placeholder="Email"
//               />
//               <button type="submit" onClick={login}>
//                 GO
//               </button>
//              <footer>
//          <h4>Don't have an account? 
//          <Link to="/register">Join SimpleSteam</Link> </h4>
//            </footer>
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