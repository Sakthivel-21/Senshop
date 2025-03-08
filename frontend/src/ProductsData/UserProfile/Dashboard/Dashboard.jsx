import React,{useEffect, useState} from 'react'
import './Dashboard.css'
import SetNavbar from '../../../Pages/SetNavbar/SetNavbar'
import axios from 'axios'
import {format} from "date-fns";
import { Link, Navigate } from 'react-router-dom';

function Dashboard() {

  axios.defaults.withCredentials= true;

  const[user, setUser] = useState()
    

    useEffect (() => {
        axios.get(`${process.env.REACT_APP_API_URL}/dashboard`)
           .then((response) => {
             setUser(response.data);
           })
           .catch((err) => console.log(err))
   }, [])

   if(!user) {
    return <h4>loading.....</h4>
}


   

  return (
   <>
   <SetNavbar/>
   <h2 className='dashboard-head'>Dashboard</h2>
   <hr className='hr-lineded'/>

  <div className='dashboard'>
  { user.map(booking => (
    <>
   <Link to={`/bookingpage/${booking._id}`} className='dashboard-link'><div className='dashboard-container'>

        
          <img src={'http://localhost:3001/'+(booking.places.place.image)} alt=''></img>

          <p className='dash-category'>Category:  {booking.places.place.category}</p>
        
          <p className='dash-1'>Items: {booking.places.pack}</p>
        
          <p className='dash-1'>Total Price: {booking.places.price}</p>
        
          <p className='dash-1'>Delievery Date: {format(new Date(booking.places.delieveryDate), "yyyy-MM-dd")}</p>
        

   </div></Link>
   <hr className='hr-dash'/>
   </>
))} 
</div>
   </>
  )
}

export default Dashboard