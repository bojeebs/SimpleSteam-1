import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.userName]: e.target.value })
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      email: formValues.email,
      userName: formValues.userName,
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
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
        <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="username">Userame</label>
            <input
              onChange={handleChange}
              userName="username"
              type="text"
              placeholder="Username"
              value={formValues.userName}
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
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register