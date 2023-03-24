import { useEffect, useState } from 'react'
import { GetGames, AddGames } from "../services/GameServices";




const Games = ({ user, authenticated }) => {
  const [games, setGames] = useState([])
  
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
    await AddGames(gamedata)
   }
  
   
  
  
  return (user && authenticated) ? (
    <div className="new-game-container">
      <h1 className='title'>Games</h1>
      {games.map((game) => (
        <div className="games-card-update" key={game.id}>
          <h3>{game.title}</h3>
          <img src={game.image}></img>


          

          <button onClick={() => Game(game.id)} className='add-game-button-two'>Add</button>

         
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
