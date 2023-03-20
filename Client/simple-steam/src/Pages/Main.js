import Header from "../Components/Header";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="main-container">
        <Link to='/login'>
      <button className="login-button">Login</button>
      </Link>
      <div className="header-card">
        <header className="header-container">
          <h1>
          SimpleSteam
            <img className="steamlogo" src="https://e7.pngegg.com/pngimages/186/621/png-clipart-steam-logo-illustration-playerunknown-s-battlegrounds-steam-logo-video-game-computer-icons-steam-logo-icon-miscellaneous-scalable-vector-graphics-thumbnail.png" alt="SteamLogo" />
            
            </h1>
        </header>
      </div>
    </div>
  );
}
