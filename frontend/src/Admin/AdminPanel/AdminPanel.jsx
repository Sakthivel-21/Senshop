import React,{useContext} from 'react'
import './AdminPanel.css'
//import ProductsForm from '../Products/ProductsForm'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Pages/UserContext'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function AdminPanel() {

  const {logout} = useContext(AuthContext)

  const navigate = useNavigate();

  return (

    

    <>
    <div className='adminpanel'>

        <div className='adminpanel-left'>
              <h2>Adminpanel</h2>

              <button onClick={() => navigate("/adminpanel/productform")}>➡️ Add Items</button>
              <button onClick={() => navigate("/adminpanel/senshopproducts")}>➡️ Senshop products</button>
              <button onClick={() => navigate("/adminpanel/userorders")}>➡️ User's Orders</button>
             

              <Link to='/'><button onClick={logout} className='logout-code'>Logout</button></Link>
        </div>

      <div className='adminpanel-right'>
        <h1>Welcome to senshop !</h1>
       <Outlet/>
       </div>
    </div>
    </>
  )
}

export default AdminPanel