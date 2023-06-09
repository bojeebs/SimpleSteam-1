import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { notloggedInGetGames, AddGames } from "../services/GameServices";
import { Data } from "../Data";
import '../styles/Main.css'


const Main = ({ user, authenticated }) => {
  const [games, setGames] = useState([]);
  let navigate = useNavigate();
  const { info, setInfo } = useContext(Data);

  useEffect(() => {
    const handleGames = async () => {
      const data = await notloggedInGetGames();
      setGames(data);
    };
    handleGames();
  }, []);

  const Game = async (gamesId) => {
    const userId = parseInt(localStorage.getItem('id'))
    const gamedata = {userId: userId, gamesId: gamesId}
    await AddGames(gamedata)
   }


   return (
    <div className="main-container">
      <div className="title-container">
        <h2 className="page-title">Games</h2>
      </div>
      <div className="grid-games">
        {games.map((game) => (
          
          <div className="card" key={game.id} style={{ backgroundImage: `url('${game.image}')` }}>
        
            <button className="add-game-button" onClick={() => Game(game.id)}>Add</button>
          </div>
        ))}
        {info.username} {info.password}
      </div>
    </div>
  )
     }
export default Main;
