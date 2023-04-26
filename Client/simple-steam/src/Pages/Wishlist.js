//import Nav from "./Nav";
import { useEffect, useState, useContext } from 'react'
import { GetUserWishlistGames, RemoveGames } from '../services/WishlistServices'
import { useNavigate, useParams } from 'react-router-dom'
import { Data } from "../Data";
import '../styles/Wishlist.css'


const Wishlist = ({ user, authenticated }) => {
  const [games, setGames] = useState([])
  let navigate = useNavigate()
  const { userId } = useParams()

  const { info, setInfo } = useContext(Data)


  useEffect(() => {
    const handleGames = async () => {
      const data = await GetUserWishlistGames(userId)
      setGames(data)
    }
    handleGames()
  }, [])

  const RemoveGame = async (gamesId) => {
    const userId = parseInt(localStorage.getItem('id'))
    const gamedata = { userId: userId, gamesId: gamesId }
    RemoveGames(gamedata)
    setGames(games.filter((game) => game.id !== gamesId))
  }

  return (user && authenticated && userId === localStorage.getItem('id')) ? (
    <div className="grid col-4">
      {games.map((game) => (
        <div className="card" key={game.id} style={{ backgroundImage: `url('${game.image}')` }}>
          <button className="remove-game-button" onClick={() => RemoveGame(game.id)}>Remove</button>
          {console.log(game.title)}
        </div>
      ))}
    </div>
  ) : (
    <div>Error</div>
  )
}



//   return (user && authenticated) ? (
//     <div className="grid col-4">
//       {games.map((game) => (
//         <div className="card" key={game.id}>
//           <h3>{game.title}</h3>
//           <div>
//             <img src={game.image} alt="game"/>
//           </div>
//           <p>{game.body.substring(0, 80)}...</p>
//           <button  onClick={() => {DeleteGames(game.id); }}>DELETE</button>
//         </div>
//       ))}
//     </div>
//   ) : (
//     <div className="protected">
//       <h3>Oops! You must be signed in to do that!</h3>
//       <button onClick={()=> navigate('/signin')}>Sign In</button>
//     </div>
//   )
// }

export default Wishlist

