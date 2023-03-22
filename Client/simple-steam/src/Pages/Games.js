//import Nav from "./Nav";
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetGames } from "../services/GameServices";
import Icon from '@mui/material/Icon';



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

   
  
  
  return (user && authenticated) ? (
    <div className="grid col-4">
      <h1 className='title'>Games</h1>
      {games.map((game) => (
        <div className="games-card" key={game.id}>
          <h3>{game.title}</h3>
          <button className='add-game-button'>Add</button>
         
            {console.log(game.title)}
        </div>
      ))}
    </div>
  ) : (
    <div>
  <h1> Please log in!</h1>
    </div>
  )
}


export default Games
