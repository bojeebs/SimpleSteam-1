//import Nav from "./Nav";
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { GetGames, GameId, AddGame } from "../services/GameServices";







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


  const GameId = async (gameid) => {
    const userid = localStorage.getItem('id')
    const gamedata = {userId:userid, gameId:gameid}
    const gameadd = await GameId(gamedata)
  }
   

   const Game = async (gamesId) => {
    const userId = parseInt(localStorage.getItem('id'))
    const gamedata = {userId: userId, gamesId: gamesId}
    console.log(gamedata)
    await AddGame(gamedata)
   }

  
  
  return (user && authenticated) ? (
    <div className="grid col-4">
      <h1 className='title'>Games</h1>
      {games.map((game) => (
        <div className="games-card" key={game.id}>
          <h3>{game.title}</h3>

          <button onClick={GameId(game.id)}className='add-game-button'>Add</button>

          <button onClick={() => Game(game.id)} className='add-game-button'>Add</button>

         
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
