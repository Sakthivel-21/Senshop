import React,{useState, useEffect} from 'react'
import './SnacksProducts.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SetNavbar from '../../Pages/SetNavbar/SetNavbar'
import ProductsItems from '../ProductsItems/ProductsItems'

function SnacksProducts() {

    const[user, setUser] = useState()
    const[filteredProducts, setFilteredProducts] = useState()

    useEffect (() => {
         axios.get(`${process.env.REACT_APP_API_URL}/snacksproductlist`)
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
    <h2 className='snacks-head'>Snacks Items</h2>
    <hr className='hr-line'/>
        
    
          {
              user.map(product => (
                <Link to={`/productsDetails/${product._id}`} className='snacks-link'> <div className='snacks'>
  
          <div className='snacks-products'>
  
             
               <img src={'http://localhost:3001/'+(product.image)} alt=''></img>
             
              <div className='snacks-products-price'>
               <h2 className='cate'>{product.category}</h2>
               <p>${product.price}</p>
               <h3>${product.discountprice} Only</h3>
               </div> 
               
  
          </div>
          </div></Link>
          ))}
  
       
  <hr style={{marginTop:50}}/>
  
    </>
  
  )
}

export default SnacksProducts