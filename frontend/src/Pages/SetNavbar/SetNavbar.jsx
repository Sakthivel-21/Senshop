import React,{useContext, useState} from 'react'
import './SetNavbar.css'
import sidebar from '../../Images/side.png'
import { Link } from 'react-router-dom'
import {AuthContext} from '../UserContext'
import axios from 'axios'

function SetNavbar() {

  const {user, logout} = useContext(AuthContext)

  
  axios.defaults.withCredentials= true;

   const [show, setShow] = useState(false)
  
    const ShowName = () => {
      if(show == false) {
        setShow(true)
      }
      else{
        setShow(false)
      }
    }

  return (
    <>
    <div className='setnav-list'>
 
    <h2>SENSHOP</h2>

    <button  onClick={ShowName}  className='nav-imgsss'><img src={sidebar} alt='' ></img></button>

    

    <div className='setnav-point'>
      <ul>
        <Link to='/' style={{textDecoration:"none"}}><li>Home</li></Link>
        <Link to='/productsItems' style={{textDecoration:"none"}}><li>Products</li></Link>
        <Link to='/contact' style={{textDecoration:"none"}}><li>Contacts</li></Link>
      </ul>

    </div>

    {user ? (
                        <>
                            <Link to='/dashboard' style={{color:'black'}}><h3 className='users-data'>Welcome, {user.name}</h3></Link>
                            <Link to='/login' style={{textDecoration:'none'}}><button onClick={logout} className='setnavbar-btn'>Logout</button></Link>
                        </>
                    ) : (
                      <Link to='/login' style={{textDecoration:'none'}}><button className='setlog-btn'>Login</button></Link>
                    )}
  </div>

  {
    show && (<div className='hide-setnav'>
    <h2>SENSHOP</h2>
    <button  onClick={ShowName} className='btn-close'>❎</button>

    {
      user ? (
        <>
    <Link to='/dashboard' style={{color:'white'}}><h3 className='user-names'>Welcome,{user.name}</h3></Link>
    <Link to='/'><button onClick={logout}  style={{background:'lightgreen'}} className='user-buttons'>Logout</button></Link></>
      ) : (
    <Link to='/login' ><button style={{background:'lightgreen'}}   className='log-btn'>Login</button></Link> )
    }
    

     <ul>
         <Link to='/' className='nav-linking'><li >Home</li></Link>
          <Link to='/productsItems' className='nav-linking'><li>Products</li></Link>
          <Link to='/contact' className='nav-linking'><li>Contacts</li></Link>
          <Link to='/dashboard' className='nav-linking'><li>Dashboard</li></Link>
       
         </ul>
  </div> )
}

    </>
  )
}

export default SetNavbar