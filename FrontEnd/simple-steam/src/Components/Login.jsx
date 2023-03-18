// const LogIn = (props) => {
//     let navigate = useNavigate()
  
//     const [formValues, setFormValues] = useState({ email: '', password: '' })
  
//     const handleChange = (e) => {
//       setFormValues({ ...formValues, [e.target.name]: e.target.value })
//     }
  
//     const handleSubmit = async (e) => {
//       e.preventDefault()
//       const payload = await LogInUser(formValues)
//       //reset form values 
//       setFormValues({ email: '', password: '' })
//      //We then take the payload and use it to update our user state in App.js with the setUser method we passed in as props
//       props.setUser(payload)
//       //Once user has been set, we'll toggle the authenticated state 
//       props.toggleAuthenticated(true)
//       //
//       navigate('/feed')
//     }
  
//     return (
//       <div className="signin col">
//         <div className="card-overlay centered">
//           <form className="col" onSubmit={handleSubmit}>
//             <div className="input-wrapper">
//               <label htmlFor="email">Email</label>
//               <input
//                 onChange={handleChange}
//                 name="email"
//                 type="email"
//                 placeholder="example@example.com"
//                 value={formValues.email}
//                 required
//               />
//             </div>
//             <div className="input-wrapper">
//               <label htmlFor="password">Password</label>
//               <input
//                 onChange={handleChange}
//                 type="password"
//                 name="password"
//                 value={formValues.password}
//                 required
//               />
//             </div>
//             <button disabled={!formValues.email || !formValues.password}>
//               Sign In
//             </button>
//           </form>
//         </div>
//       </div>
//     )
//   }
  
//   export default SignIn
  