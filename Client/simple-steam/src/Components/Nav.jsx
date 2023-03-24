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

      // function Func(e) {
      //   let  filter, a, i;
      //   filter = e.target.value.toUpperCase();
      //   let div = document.getElementById("Dropdown");
      //   a = div.getElementsByTagName("tr");
      //   let numDisplayed = 0;
      //   if (filter === "") {
      //     for (i = 0; i < a.length; i++) {
      //       a[i].style.display = "none";
      //     }
      //   } else {
      //     for (i = 0; i < a.length; i++) {
      //       let txtValue = a[i].textContent || a[i].innerText;
      //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
      //         if (numDisplayed < 4) {
      //           a[i].style.display = "";
      //           numDisplayed++;
      //         } else {
      //           a[i].style.display = "none";
      //         }
      //       } else {
      //         a[i].style.display = "none";
      //       }
      //     }
      //   }
      // }
      
      
      return (
        <div className='nav-container'>
          <nav className='navbar'>
            <Link className='links' to="/">Home</Link>
            <Link className='links' to="/profile">Profile</Link>
            <Link className='links' to="/games">Games</Link>
            <Link className='links' to={`/wishlist/${localStorage.getItem('id')}`}>Wishlist</Link>
            <div className='search'>
              {/* <input className='searchbar' type='text' placeholder='Search' onKeyUp={Func} /> */}

              <div className="dropdown">

              {/* <div className="dropdown">

                <table id="Dropdown">
                {games.map((game) => (
                  <tr>
                    <td>{game.title}<button onClick={() => Game(game.id)}>Add</button></td>
                  </tr>
                ))}
                </table>
              </div> */}
            </div>
          </nav>
        </div>
      );
    }      


// const Nav = ({  user, handleLogOut }) => {
  
//   if (user) {

//       <nav>
//         <h3>Welcome {user.email}!</h3>
//         <Link to="/feed">Feed</Link>
//         <Link onClick={handleLogOut} to="/">
//           Sign Out
//         </Link>
//       </nav>
    
//   }

//   const publicOptions = (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/profile">Profile</Link>
//       <Link to="/games">Games</Link>
//       <Link to="/wishlist">Wishlist</Link>
//     </nav>
//   )

//   return (
//     <header>
//       <Link to="/">
//         <div className="logo-wrapper" alt="logo">
       
//         </div>
//       </Link>
//     </header>
//   )
// }

// export default Nav
