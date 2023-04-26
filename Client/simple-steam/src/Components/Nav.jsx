import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { GetGames, AddGames } from "../services/GameServices";
export default function Nav(){
    const [games, setGames] = useState([]);


    useEffect(() => {
        const handleGames = async () => {
          const data = await GetGames()
          console.log(data);
          setGames(data)
        }
        handleGames()
      }, [])

      const Game = async (gamesId) => {
        const userId = parseInt(localStorage.getItem('id'))
        const gamedata = {userId: userId, gamesId: gamesId}
        await AddGames(gamedata)
       }

       function Func(e) {
        const filter = e.target.value.toUpperCase();
        const div = document.getElementById("Dropdown");
        const rows = div.getElementsByTagName("tr");
        let numDisplayed = 0;
        
        for (let i = 0; i < rows.length; i++) {
          const row = rows[i];
          const txtValue = row.textContent || row.innerText;
          if (txtValue.toUpperCase().includes(filter)) {
            if (numDisplayed < 4) {
              row.style.display = "";
              numDisplayed++;
            } else {
              row.style.display = "none";
            }
          } else {
            row.style.display = "none";
          }
        }
      }
      
      
      
      return (
        <div className='nav-container'>
          <nav className='navbar'>
            <Link className='links' to="/">Home</Link>
            <Link className='links' to="/profile">Profile</Link>
            <Link className='links' to="/games">Games</Link>
            <Link className='links' to={`/wishlist/${localStorage.getItem('id')}`}>Wishlist</Link>
            <div className='search'>
              <input className='searchbar' type='text' placeholder='Search' onKeyUp={Func} />
              <div className="dropdown">
                <table id="Dropdown">
                  {games.map((game) => (
                    <tr key={game.id} style={{ display: "none" }}>
                      <td>{game.title}<button onClick={() => Game(game.id)}>Add</button></td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </nav>
        </div>
      );
    }

