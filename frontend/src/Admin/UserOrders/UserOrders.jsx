import React,{useEffect, useState} from 'react'
import './UserOrders.css'
import axios from 'axios'
import {format} from "date-fns";
import { Link } from 'react-router-dom';



function UserOrders() {

   axios.defaults.withCredentials= true;
  
    const[user, setUser] = useState()

  
      useEffect (() => {
          axios.get(`${process.env.REACT_APP_API_URL}/userorders`)
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
     <h2 className='user-head'>Your Orders</h2>
        <hr className='hr-lineded'/>
     
       
     
       <div className='user'>
       { user.map(booking => (
         <>
        <Link to={`/bookingpage/${booking._id}`} className='user-link'><div className='user-container'>
     
              <img src={booking.places.place.image} alt=''></img>
     
               <p className='user-category'>Category:  {booking.places.place.category}</p>
             
               <p className='user-1'>Total Price: RS {booking.places.price}</p>
              
               <p className='user-1'>Email:  {booking.user.email}</p>
              
              

             
     
        </div></Link>
        <hr className='hr-user'/>
        </>
     ))} 
     </div>
   </>
  )
}

export default UserOrders