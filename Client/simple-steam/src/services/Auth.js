import Client from './api'

export const LoginUser = async (data) => {
  try {
    const res = await Client.post('/api/login', data)
    // Set the current signed in users token to localStorage
    // return user object and a JWT(token), value is always a string
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('id', res.data.user.id)
    return res.data.user
  } catch (error) {
    throw error
  }
}



export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/api/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('/api/session')
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateProfile = async (data) => {
  try {
    const res = await Client.put('/api/users/user_id', data)
    return res.data
   
  } catch (error) {
    throw error
  }

}
