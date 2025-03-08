import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import './PaymentPage.css'
import {format} from "date-fns";
import axios from "axios";
import { useParams } from "react-router-dom";
import SetNavbar from "../../Pages/SetNavbar/SetNavbar";
import { Navigate } from "react-router-dom";

// Load Stripe with your publishable key
const stripePromise = loadStripe("pk_test_51QwK6XQFCTgqXGipMJWkMZkfq5B3YkLHZf7dhi92rn74cE1Cu19pMjAjx5v7vez82BWLlnnKxih2FPalJLVbsRiC00qhvUDwad");

const PaymentPage = () => {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: 1000, currency: "usd" }), // Example: $10 payment
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);
 const {id} = useParams()
    
    const[user, setUser] = useState()
    const[reDirect,setReDirect] = useState()
    const [isCOD, setIsCOD] = useState(false);

    useEffect (() => {
        axios.get(`${process.env.REACT_APP_API_URL}/bookingDetail/${id}`)
           .then((response) => {
             setUser(response.data);
           })
           .catch((err) => console.log(err))
   }, [])

   
   if(!user) {
    return <h3>loading....</h3>
}

const handleCheckboxChange = (e) => {
    setIsCOD(e.target.checked)
}

const fetchPost  = async (e) => {
     e.preventDefault();

     try {
        if(isCOD) {
             const response = await axios.post(`${process.env.REACT_APP_API_URL}/payoptions`, {
             pay:"You are selecting an Cash on Delievery",  places: user._id
         })
         const bookingId = response.data._id
         setReDirect(`/bookingpage/${bookingId}`)
     }}
     catch (err) {
        console.log(err)
     }
   }

   if(reDirect) {
    return <Navigate to={reDirect}></Navigate>
}


    return (

        <>
        <SetNavbar/>
        <div className='delievery-details'>
        
                <div className='delievery-details1'>
                 <h3>Order Details</h3>
                 <hr className='hr-lined'/>
                 </div>
         
                 <div className='delievery-details2'>
                    <div className='delievery-details2-left'>
                        <img src={'http://localhost:3001/'+(user.place.image)}></img>
                    </div>
                    
                    <div className='delievery-details2-right'>
                        
                         <h2>{user.place.category}</h2>
                         <p>Total Pack : {user.pack}</p>
                         <p>Order Date : {format(new Date(user.orderDate), "EEEE, yyyy-MM-dd")}</p>
                         <p>Delievery Date : {format(new Date(user.delieveryDate), "EEEE, yyyy-MM-dd")}</p>
                         <p>Delievery Charge  : Free</p>
                         <p>Price ({user.pack}) item : $ {user.price}</p>
                    </div>
                 </div>
        
        
            </div>

            <div className="payment-options">
            <h3 >Payment Options</h3>
            <hr className='hr-lined'/>
         
        <div className="payment-container">
            <h2>Stripe Payment</h2>
            {clientSecret && (
                <Elements stripe={stripePromise}>
                    <CheckoutForm clientSecret={clientSecret} />
                </Elements>
            )}
         </div>

         <div >
         <form onSubmit={fetchPost}>
        <label>
        <input type="checkbox" checked={isCOD} onChange={handleCheckboxChange} className='input-book'/>
        Cash On Delievery
        </label>
      
        <button type='submit' className='btn-book'>Submit</button>
        </form>
         </div>
        </div>
      
        </>
    );
};

export default PaymentPage;
