//import Nav from "./Nav";
import { useEffect, useState } from 'react'
import { GetUserWishlistGames, DeleteGames } from '../services/WishlistServices'
import { useNavigate, useParams } from 'react-router-dom'


const Wishlist = ({ user, authenticated }) => {
  const [games, setGames] = useState([])
  let navigate = useNavigate()
  const { userId } = useParams()



  useEffect(() => {
    const handleGames = async () => {
      const data = await GetUserWishlistGames(userId)
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

