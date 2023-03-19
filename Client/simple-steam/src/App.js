// import { useState, useEffect } from 'react'
 import { Route, Routes } from 'react-router'
 import Nav from './Components/Nav'
 import Main from './Pages/Main'
// import Login from './Pages/Login'





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"
        element={
          <div>
            <Main />
            <Nav />
          </div>
        }
        />
      </Routes>
    </div>
  );
}

export default App;
