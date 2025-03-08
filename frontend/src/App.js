import React from 'react'
import Home from './Pages/Home/Home';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import axios from 'axios'
import ProductsForm from './Admin/Products/ProductsForm';
import ProductsItems from './ProductsData/ProductsItems/ProductsItems';
import ProductDetails from './ProductsData/ProductsDetails/ProductDetails';
import RiceProducts from './ProductsData/RiceProducts/RiceProducts';
import PulseProducts from './ProductsData/PulseProducts/PulseProducts';
import PersonalCareProducts from './ProductsData/PersonalCareProducts/PersonalCareProducts';
import ChocolatesProducts from './ProductsData/ChocolatesProducts/ChocolatesProducts';
import SnacksProducts from './ProductsData/SnacksProducts/SnacksProducts';
import BookProducts from './ProductsData/BookProducts/BookProducts';
import BookingPage from './ProductsData/BookingPage/BookingPage';
import Dashboard from './ProductsData/UserProfile/Dashboard/Dashboard';
import SetNavbar from './Pages/SetNavbar/SetNavbar';
import Footer from './Pages/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import SetContact from './Pages/SetContact/SetContact';
import Product from './Pages/Product';
import AdminPanel from './Admin/AdminPanel/AdminPanel';
import SenshopProducts from './Admin/SenshopProducts/SenshopProducts';
import PaymentPage from './ProductsData/PaymentPage/PaymentPage';



function App() {
  axios.defaults.withCredentials= true;

  //const location = useLocation()

  //const isAdminroute = location.pathname.startsWith('/adminpanels')

  
return (
  <>
   <Router>
  
   <Routes>
      <Route path='/' element={<Home/> }></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/contact' element={<SetContact/>}></Route>
      <Route path='/productsItems' element={<RiceProducts/>}> </Route>
      <Route path='/productsform' element={<ProductsForm/>}> </Route>
      <Route path='/productsDetails/:id' element={<ProductDetails/>}>  </Route>
      <Route path='/riceproducts' element={<RiceProducts/>}></Route>
      <Route path='/pulseproducts' element={<PulseProducts/>}></Route>
      <Route path='/personalcareproducts' element={<PersonalCareProducts/>}></Route>
      <Route path='/chocolatesproducts' element={<ChocolatesProducts/>}></Route>
      <Route path='/snacksproducts' element={<SnacksProducts/>}></Route>
      <Route path='/noteproducts' element={<BookProducts/>}></Route>
      <Route path='/bookingpage/:id' element={<BookingPage/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/adminpanel' element={<AdminPanel/>}></Route>
      <Route path='/senshopproducts' element={<SenshopProducts/>}></Route>
      <Route path='/paymentpage/:id' element={<PaymentPage/>}></Route>
   </Routes>
   <Footer/>
   </Router>

   
   </>
  )
}

export default App;