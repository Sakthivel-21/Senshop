import React, {useEffect, useState} from 'react'
import './PersonalCareProducts.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SetNavbar from '../../Pages/SetNavbar/SetNavbar'
import ProductsItems from '../ProductsItems/ProductsItems'

function PersonalCareProducts() {

    const[user, setUser] = useState()
     const[filteredProducts, setFilteredProducts] = useState()

    useEffect (() => {
         axios.get(`${process.env.REACT_APP_API_URL}/personalCareproductlist`)
            .then((response) => {
              setUser(response.data);
              setFilteredProducts(response.data)
            })
            .catch((err) => console.log(err))
    }, [])

    if(!user) {
        return <h3>loading....</h3>
    }

    const handleChange = (value) => {
      const res = filteredProducts.filter( f=> f.category.toLowerCase().includes(value)) 
      setUser(res)
}


  return (
    <>
    <SetNavbar/>
    <ProductsItems/>

    <center>
    <input type='text' placeholder='search here...' className='search' onChange={(e) => handleChange(e.target.value)}></input></center>
    <h2 className='personalcare-head'>Personal Care Things</h2>
    <hr className='hr-line'/>
      
        
        {
            user.map(product => (
               <Link to={`/productsDetails/${product._id}`} className='personalcare-link'><div className='personalcare'>

        <div className='personalcare-products'>

           
        <img src={product.image} alt=''></img>
           
        <div className='personalcare-products-price'>
             <h2 className='cate'>{product.category}</h2>
             <p>RS{product.price}</p>
             <h3>RS{product.discountprice} Only</h3>
             
        </div>
             
            
        </div>
        </div></Link>
        ))}

     
<hr style={{marginTop:50}}/>

  </>
  )
}

export default PersonalCareProducts