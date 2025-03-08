import React from 'react'
import './ProductsItems.css'
import { Link } from 'react-router-dom'

function ProductsItems() {
  return (
    <>
    <div className='productitems'>
      <h3>Menu</h3>
       <Link to='/riceproducts' className='link-items'><li>Rice Products</li></Link>
       <Link to='/pulseproducts'  className='link-items'><li>Pulse Products</li></Link>
       <Link to='/personalcareproducts'  className='link-items'><li>Personalcare Products</li></Link>
       <Link to='/snacksproducts'  className='link-items'><li>Snacks Products</li></Link>
       <Link to='/chocolatesproducts'  className='link-items'><li>Chocolates Products</li></Link>
       <Link to='/noteproducts'  className='link-items'><li>Note Products</li></Link>
    </div>
    </>
  )
}

export default ProductsItems