 import { useState, useContext } from 'react'
 import { LoginUser } from '../services/Auth'
 import { useNavigate } from 'react-router-dom'
 import { Data } from "../Data";


 import {Link} from 'react-router-dom'




const Login = (props) => {
    let navigate = useNavigate()
    const { info, setInfo } = useContext(Data)
  
    const [formValues, setFormValues] = useState({ username: '', password: '' })
  
    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
       const payload = await LoginUser(formValues)
       console.log(payload)
       setInfo({...info, id: payload.id, username: payload.username, password: payload.password, createdAt: payload.createdAt , updatedAt: payload.updatedAt})
       setFormValues({ username: '', password: '' })
     
       props.setUser(payload)

       props.toggleAuthenticated(true)
      
      navigate('/')
    }
  
    return (
      <div>
            <h1 className='title'>Login</h1>
       
      <div className='login-wrapper'>
        
      <div className="login-container">
          
          

      <div className="signin col">
        <div className="card-overlay centered">
          <form className="col" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label className='user-password' htmlFor="username">Username</label>
              <input
                className='login-input'
                onChange={handleChange}
                name="username"
                type="username"
                placeholder="username"
                value={formValues.email}
                required
              />
            </div>
            <div className="input-wrapper">
              <label className='user-password' htmlFor="password">Password</label>
              <input
                className='login-input'
                onChange={handleChange}
                type="password"
                name="password"
                placeholder='password'z
                value={formValues.password}
                required
              />
            </div>
            <button className='signin-button' disabled={formValues.username === '' || !formValues.password === ''}>
              Sign In
            </button>
            <footer>
              <h4 className='redirect-text'>Don't have an account? <Link className='links' to="/register">Join SimpleSteam</Link> </h4>
            </footer>
          </form>
          
        </div>
        </div>
      </div>
      </div>
      </div>
    )
  }
  
  export default Login






  

 
