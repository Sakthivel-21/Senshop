import React,{useEffect, useState} from 'react'
import './RiceProducts.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SetNavbar from '../../Pages/SetNavbar/SetNavbar'
import ProductsItems from '../ProductsItems/ProductsItems'

function RiceProducts({searchTerm}) {

    const[user, setUser] = useState()
    const[filteredProducts, setFilteredProducts] = useState()
  

    useEffect (() => {
         axios.get(`${process.env.REACT_APP_API_URL}/riceproductlist`)
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

    <input type='text' placeholder='search here...' className='search' onChange={(e) => handleChange(e.target.value)}></input>
    
    <h2 className='rice-head'>Varities of Rices</h2>
    <hr className='hr-line'/>
      
        
{
    user.map(product => (
     <Link to={`/productsDetails/${product._id}`} className='rice-link'><div className='rices'>

<div className='rice-products'>

   
    <img src={product.image} alt=''></img>
   
    <div className='rice-products-price'>
     <h3 className='cate'>{product.category}</h3>
     <p >${product.price} </p>
     <h2 >{product.discountprice}</h2>
    </div>

    </div> 
     


</div></Link> 
))}

<hr style={{marginTop:50}}/>

    </>
  )
}

export default RiceProducts