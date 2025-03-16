import React,{useState, useEffect} from 'react'
import './ProductDetails.css'
import SetNavbar from '../../Pages/SetNavbar/SetNavbar'
import { Link, redirect } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import {format} from "date-fns";


function ProductDetails() {

  const {id} = useParams()

  const[user, setUser] = useState()
  
  const[reDirect,setReDirect] = useState()
  
  const[pack, setPack] = useState()
  const[address, setAddress] = useState()
  const[orderDate, setOrderDate] = useState()
  const[delieveryDate, setDelieveryDate] = useState()
  const[price, setPrice] =useState()
  
  

    useEffect (() => {
         axios.get(`${process.env.REACT_APP_API_URL}/productsDetail/${id}`)
            .then((response) => {
              setUser(response.data);
            })
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
      const today = new Date().toISOString().split("T")[0];
      setOrderDate(today)
    }, [])

    useEffect(() => {
    const delieveryDates = () => {
       let date = new Date();
       date.setDate(date.getDate() + 7);
       return date.toISOString().split("T")[0];
    }
    setDelieveryDate(delieveryDates())
  }, [])

  

  const fetchPost  = async (e) => {
      e.preventDefault();

      const orderDetails = {pack,address, orderDate, delieveryDate , place: user._id, price: pack* user.discountprice}

      const response = await axios.post(`${process.env.REACT_APP_API_URL}/orderDetails`, {
        pack,address, orderDate, delieveryDate , place: user._id, price: pack* user.discountprice
      })
      const bookingId = response.data._id
      setReDirect(`/paymentpage/${bookingId}`)
    }

    if(reDirect) {
          return <Navigate to={reDirect}></Navigate>
    }

   
    if(!user) {
      return <h3>loading....</h3>
  }

  let originalPrice = 0;

  

  

  return (
    <>
    <SetNavbar/>

    <h2 className='products-heading'>Product Details</h2>
    <hr className='hr-line'/>

    <div className='Product-details'>

      <div className='Product-details-1'>
           <img src={`${process.env.REACT_APP_API_URL}/${user.image}`} alt=''></img>
          
           <h3>Description</h3>
           <p>{user.description}</p>
      </div>

      <div className='Product-details-2'>
           <h2 className='products-category'>{user.category}</h2>
           <button className='rate-btn'>4.5</button>
           <p>(14) Ratings</p>
           <h3>Special Price</h3>
           <h2 className='products-discountprice'>RS {user.discountprice} only</h2>
           <h2 className='products-price'>RS {user.price}</h2>
           <h4>Available Offer</h4>
           <li style={{marginTop:-8}}>Buy Three Items to reduce 20% of Cost</li>
           
           <form className='product-form' onSubmit={fetchPost}>
           <h2>Order Now</h2>
           <div className='product-order'>
           <label>Quantity:
           <input type='number'  value={user.stock} className='input-type11'></input> </label>
           </div>

           <div className='product-order'>
           <label>How many package you order: </label>
           <input type='number' value={pack} onChange={(e) => setPack(e.target.value)} className='input-type1'></input>
           </div>
           
           <div className='product-order'>
           <label>Delievery address:</label>
           <input type='string' placeholder='Provide Your Deleivery Address' className='input-type3' value={address}  onChange={(e) => setAddress(e.target.value)}></input>
           </div>

           <div className='product-order'>
           <label>Order Date: </label>
           <p className='input-type2'>{format(new Date(orderDate), "EEEE , yyyy-MM-dd")}</p>
         
            </div>
           
           <div className='product-order'>
           <label>Delievery Date: </label>
            <p className='input-type2'>{format(new Date(delieveryDate), "EEEE , yyyy-MM-dd")}</p>
           </div>

           <div className='product-order' >
           <label>Price: </label>
           <p>RS {pack* user.discountprice} only</p>
           </div>
           <button type='submit' className='sub-btn'>Order now</button>
           </form>
      </div>

    </div>
    </>
  )
}

export default ProductDetails