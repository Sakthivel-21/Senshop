import React,{useState, useEffect, useContext} from 'react'
import './SenshopProducts.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Pages/UserContext'

function SenshopProducts() {

    const[user, setUser] = useState()

    const {logout} = useContext(AuthContext)

    useEffect (() => {
         axios.get(`${process.env.REACT_APP_API_URL}/senshopproducts`)
            .then((response) => {
              setUser(response.data);
            })
            .catch((err) => console.log(err))
    }, [])

    if(!user) {
        return <h3>loading....</h3>
    }


  return (
    <>

    <div className='senshoping'>

      <div className='senshoping-1'>
             <h2>Adminpanel</h2>

             <Link to='/adminpanel' style={{textDecoration:'none', color:'black'}}> <p>Add Products</p></Link>
             <p>Senshop products</p>

             <Link to='/'><button onClick={logout} className='logout-code'>Logout</button></Link>
      </div>

      <div className='senshoping-2'>
      <h1 className='product-title'>Senshop Products</h1>


      {
            user.map(product => (
               <Link to={`/productsDetails/${product._id}`} className='personalcare-link'>
                  <div className='senshopproducts'>
                  
        <div className='senshopproducts-products'>
              
           
             <img src={product.image} alt=''></img>
             <h2 >{product.category}</h2>
             <h3>${product.discountprice} Only</h3>
             <p>${product.price}</p>
            
           
             

        </div> 
        </div>
        </Link>
        
       
        ))}

      </div>


    </div>

   

  
      </>
  )
}

export default SenshopProducts