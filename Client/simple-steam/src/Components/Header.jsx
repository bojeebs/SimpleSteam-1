import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header ({ user, authenticated }) {

  const Logout = () => {
    localStorage.clear('id') // or localStorage.clear() 
    localStorage.clear('token')
  }



 

    return (
        <div>
            <div className="header-card">
          <div className="header-container">
            <h1>
              SimpleSteam
              <img
                className="steamlogo"
                src="https://e7.pngegg.com/pngimages/186/621/png-clipart-steam-logo-illustration-playerunknown-s-battlegrounds-steam-logo-video-game-computer-icons-steam-logo-icon-miscellaneous-scalable-vector-graphics-thumbnail.png"
                alt="SteamLogo"
              />
            </h1>
            {user && authenticated ? <>
                <Link to="/">
                <button onClick={()=>Logout()} className="logout-button">Logout</button>
              </Link>

        </> :  <><Link to="/login">
          <button className="login-button">Login</button>
        </Link></>}
            </div>
            </div>
        <div className="header-title">
        </div>

            <div className="nav-container">
                <Nav />
            </div>


        </div>


    )
}