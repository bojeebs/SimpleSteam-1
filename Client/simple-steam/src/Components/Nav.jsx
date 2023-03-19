import { Link } from 'react-router-dom'



export default function Nav(){
    return (
<nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/games">Games</Link>
      <Link to="/wishlist">Wishlist</Link>
    </nav>

    )
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
