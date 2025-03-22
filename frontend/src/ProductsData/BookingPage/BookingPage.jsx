import React,{useState, useEffect} from 'react'
import './BookingPage.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PaymentPage from '../PaymentPage/PaymentPage'
import {format, addDays} from "date-fns";

function BookingPage() {

    const {id} = useParams()

    const[user, setUser] = useState()
    const [pay, setPay] = useState();

    useEffect (() => {
        axios.get(`${process.env.REACT_APP_API_URL}/payDetail/${id}`)
           .then((response) => {
             setUser(response.data);
           })
           .catch((err) => console.log(err))
   }, [])

   
   if(!user) {
    return <h3>loading....</h3>
}




   //if(reDirect) {
         //return <Navigate to={reDirect}></Navigate>
  // }

  return (
    <>
    <div className='booking-details'>
         <h3>Senshop</h3>
    </div>

    <h2 className='book-page'>Order Details</h2>

    <hr className='hr-lined'/>

    <div className='login-details'>
    <h3 >Login Details</h3>
    <hr className='hr-lined'/>
         <p>{user.user.email}</p>
    </div>

    <div className='address-details'>
         <h3 >Delievery Address</h3>
         <hr className='hr-lined'/>
         <p >{user.places.address}</p>
    </div>


    <div className='delievery-details'>

        <div className='delievery-details1'>
         <h3>Order Details</h3>
         <hr className='hr-lined'/>
         </div>
 
         <div className='delievery-details2'>
            <div className='delievery-details2-left'>
                
                <img src={user.places.place.image} alt=''></img>
            </div>
            
            <div className='delievery-details2-right'>
                
                 <h2>{user.places.place.category}</h2>
                 <p>Total Pack : {user.places.pack}</p>
                 <p>Order Date : {format(new Date(user.places.orderDate) , "EEEE, yyyy-MM-dd")}</p>
                 <p>Delievery Date : {format(new Date(user.places.delieveryDate), "EEEE, yyyy-MM-dd")}</p>
                 <p>Delievery Charge  : Free</p>
                 <p>Price ({user.places.pack}) item : RS {user.places.price}</p>
            </div>
         </div>


    </div>

    < div className='payment-details'>
    <h3 >Payment Summary</h3>
    <hr className='hr-lined'/>
    <p>{user.pay}</p>
    </div>

    <div className='order-summary'>
    <h3 >Order Summary</h3>
    <hr className='hr-lined'/>
    <div className='order-sucess'>Your order Successfull</div>
    </div>


    </>
  )
}

export default BookingPage