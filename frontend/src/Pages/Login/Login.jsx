import React,{useState, useContext} from 'react'
import './Login.css'
import SetNavbar from '../SetNavbar/SetNavbar'
import {Link, Navigate, } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
//import { UserContext } from '../UserContext'

function Login() {

  axios.defaults.withCredentials= true;
  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const [redirect, setDirect] = useState()

  //const {setUser} = useContext(UserContext)
   

  const navigate = useNavigate();

  
  {/*const handleSubmit = async (e) => {
       e.preventDefault();
       try {
           const res = axios.post("http://localhost:3001/login", { email, password})
           window.location.href= '/';
      }
       catch(err){
            console.log(err)}
       };*/}

       const handleSubmit = async (e) => {
       e.preventDefault();
       axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password},{withCredentials: true})
            .then((res) => {
              console.log(res.data)
              window.location.href = '/'
            })
            .catch(err => console.log(err))
      }
       



     


  return (
    <>
    <SetNavbar/>

   
    <form className='forms' onSubmit={handleSubmit}>
      <h2 >Login</h2>
      
      <div className="forms-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className='input-2'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="forms-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="forms-btn">Register</button>

     <p>Don't have an account: <Link to='/register'>Register here</Link></p>
    </form>
    
    </>
  )
}

export default Login