import Nav from "./Nav";


export default function Header () {
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