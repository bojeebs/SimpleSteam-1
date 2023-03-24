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
        let  filter, a, i;
        filter = e.target.value.toUpperCase();
        let div = document.getElementById("Dropdown");
        a = div.getElementsByTagName("tr");
        let numDisplayed = 0;
        if (filter === "") {
          for (i = 0; i < a.length; i++) {
            a[i].style.display = "none";
          }
        } else {
          for (i = 0; i < a.length; i++) {
            let txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              if (numDisplayed < 4) {
                a[i].style.display = "";
                numDisplayed++;
              } else {
                a[i].style.display = "none";
              }
            } else {
              a[i].style.display = "none";
            }
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
                    <tr key={game.id}>
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

