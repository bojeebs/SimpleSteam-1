 import { useState, useEffect } from 'react';
 import { Route, Routes } from 'react-router';
 import Nav from './Components/Nav';
 import Main from './Pages/Main';
 import Login from './Pages/Login';
 import Wishlist from './Pages/Wishlist';
 import Games from './Pages/Games';
 import Profile from './Pages/Profile'
 import Register from './Pages/Register'
 import Header from './Components/Header';
 import './styles/App.css'
 import { CheckSession } from './services/Auth'
 import { Data } from './Data';
 const axios = require('axios');


 


function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)


  const [info, setInfo] = useState({
    id:'',
    username:'',
    email:'',
    password:'',
    createdAt:'',
    updatedAt:''
  })
  
 
  const checkToken = async () => {
    //If a token exists, sends token to localStorage to persist logged in user
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
    
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
    
  }, [])
  console.log(localStorage.getItem('token'))
  
  axios.get(`http://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?key=3081A460C4F7A4F7B42CCFA9530B9A2F&format=json`)
  .then(response => {
    const data = response.data;
   
  })




  // const handleLogOut = () => {
  //   //Reset all auth related state and clear localStorage
  //   setUser(null)
  //   toggleAuthenticated(false)
  //   localStorage.clear()
  // }


  return (
    <div className="App">
       <Data.Provider value={{info, setInfo}}>
      <Routes>
        <Route path="/"
        element={
          <div>
             <Header user={user} authenticated={authenticated}/>
            <Main />
          </div>
        }/>
        <Route
        path="/Login"
        element={
          <div>
             <Header user={user} authenticated={authenticated}/>
                <Login
            setUser={setUser}
  toggleAuthenticated={toggleAuthenticated}
          />  
          </div>
        }/>
         <Route
        path="/wishlist/:userId"
        element={<div>

      
          <Header user={user} authenticated={authenticated}/>
            <Wishlist user={user} authenticated={authenticated}/>
            </div>
        }/>

<Route path="/games"
        element={
          <div>
             <Header user={user} authenticated={authenticated}/>
            <Games user={user} authenticated={authenticated}/>
            
          </div>
        }/>

<Route path="/register"
        element={
          <div>
             <Header user={user} authenticated={authenticated}/>
            <Register />
            
          </div>
        }/>

<Route path="/profile"
        element={
          <div>
             <Header />
            <Profile />
            
          </div>
        }/>

      </Routes>
      </Data.Provider>
    </div>
  );
}







export default App;
