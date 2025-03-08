import React from 'react'
import './AdminPanel.css'
import ProductsForm from '../Products/ProductsForm'
import { Link } from 'react-router-dom'

function AdminPanel() {
  return (
    <>
    <div className='adminpanel'>

        <div className='adminpanel-left'>
              <h2>Adminpanel</h2>

              <p>Add Products</p>
              <Link to='/senshopproducts' style={{textDecoration:'none', color:'black'}}><p>Senshop products</p></Link>
        </div>

        <div className='adminpanel-right'>
              <ProductsForm/>
        </div>

    </div>
    </>
  )
}

export default AdminPanel