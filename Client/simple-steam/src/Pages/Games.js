//import Nav from "./Nav";
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetGames } from "../services/GameServices";

const Games = ({ user, authenticated }) => {
  const [games, setGames] = useState([])
  let navigate = useNavigate()
  
  useEffect(() => {
    const handleGames = async () => {
      const data = await GetGames()
      setGames(data)
    }
    handleGames()
  }, [])

   
  
  
  return (
    <div className="grid col-4">
      <h1>Test</h1>
      {games.map((game) => (
        <div className="card" key={game.id}>
          <h3>{game.title}</h3>
         
            {console.log(game.title)}
        </div>
      ))}
    </div>
  ) 
}


export default Games
