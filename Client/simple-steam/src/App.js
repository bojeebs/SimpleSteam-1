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
 import { fetchSteamData } from './services/GameServices';

 


function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [steamData, setSteamData] = useState(null)

  const [info, setInfo] = useState({
    id:'',
    username:'',
    email:'',
    password:'',
    createdAt:'',
    updatedAt:''
  })
  
  useEffect(() => {
    async function getData() {
      const data = await fetchSteamData()
      console.log(data)
      setSteamData(data)
    }
    getData()
  }, [])


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
            <Main steamData={steamData}/>
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
            <Games steamData={steamData} user={user} authenticated={authenticated}/>
            
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
             <Header user={user} authenticated={authenticated}/>
            <Profile user={user} authenticated={authenticated} />
            
          </div>
        }/>

      </Routes>
      </Data.Provider>
    </div>
  );
}







export default App;
