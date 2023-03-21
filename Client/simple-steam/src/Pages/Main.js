import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GetGames } from "../services/GameServices";
import { Data } from "../Data";

const Main = ({ user, authenticated }) => {
  const [games, setGames] = useState([]);
  let navigate = useNavigate();
  const { info, setInfo } = useContext(Data);

  useEffect(() => {
    const handleGames = async () => {
      const data = await GetGames();
      setGames(data);
    };
    handleGames();
  }, []);

  return (
    <div className="main-container">
      <div className="grid-games">
        {games.map((game) => (
          <div className="card" key={game.id}>
            <h3>{game.title}</h3>

            {console.log(game.title)}

            {console.log(game.title)}
          </div>
        ))}
        {info.username} {info.password}
      </div>
    </div>
  );
};
export default Main;
