 import { useState, useEffect } from 'react';
 import { Route, Routes } from 'react-router';
 import Nav from './Components/Nav';
 import Main from './Pages/Main';
 import Login from './Pages/Login';
 import Wishlist from './Pages/Wishlist';
 import Header from './Components/Header';
 import Register from './Pages/Register'
 import './styles/App.css'
 import { CheckSession } from './services/Auth'
 import Games from './Pages/Games'


 


function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)


  useEffect(() => {
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])
 
  const checkToken = async () => {
    //If a token exists, sends token to localStorage to persist logged in user
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }
  // const handleLogOut = () => {
  //   //Reset all auth related state and clear localStorage
  //   setUser(null)
  //   toggleAuthenticated(false)
  //   localStorage.clear()
  // }


  return (
    <div className="App">
      <Routes>
        <Route path="/"
        element={
          <div>
            <Main />
            <Nav />
          </div>
        }/>
        <Route
        path="/Login"
        element={
          <div>
             <Header />
                <Login
            setUser={setUser}
  toggleAuthenticated={toggleAuthenticated}
          />
            
          </div>
        }/>
         <Route
        path="/wishlist"
        element={
            <Wishlist user={user} authenticated={authenticated}/>
        }/>
        <Route
        path="/games"
        element={
            <Games user={user} authenticated={authenticated}/>
        }/>
        <Route path="/register" 
        element={
        <div>
          <Header/>
          <Register/>
        </div>} />
      </Routes>
    </div>
  );
}

export default App;
