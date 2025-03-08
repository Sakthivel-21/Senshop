import React,{useState} from 'react'
import './Register.css'
import SetNavbar from '../SetNavbar/SetNavbar'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  axios.defaults.withCredentials= true;
   
const navigate = useNavigate();
  
   const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/register", {name, email, password})
    .then(result => {
        console.log(result)
        navigate('/login')
    })
   .catch(err => console.log(err))
  };

  return (
    <>
    <SetNavbar/>
    <form className='form' onSubmit={handleSubmit}>
        <h2 >Register</h2>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className='input-2'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="form-btn">Register</button>

     <p>Already have an account: <Link to='/login'>Login here</Link></p>
    </form>
  
    </>
  )
}

export default Register