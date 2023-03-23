import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      email: formValues.email,
      username: formValues.username,
      password: formValues.password
    })

    setFormValues({
      email: '',
      userName: '',
      password: '',
      confirmPassword: ''
    })
  
    navigate('/login')
  }

  return (
    <div>
            <h1 className='title'>Register</h1>
       
      <div className='register-wrapper'>
        
      <div className="register-container">

    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
        <div className="input-wrapper">
            <label className='user-password' htmlFor="email">Email</label>
            <input
              className='register-input'
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className='user-password' htmlFor="username">Username</label>
            <input
              className='register-input'
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="Username"
              value={formValues.username}
              required
            />
          </div>

          <div className="input-wrapper">
            <label className='user-password' htmlFor="password">Password</label>
            <input
              className='register-input'
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className='user-password' htmlFor="confirmPassword">Confirm Password</label>
            <input
              className='register-input'
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
          className='signin-button'
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Create Account
          </button>
          <footer>
            <h4 className='redirect-text'>Already have an account? 
                <Link className='links' to="/login">Login</Link>
            </h4>
             </footer>
        </form>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Register