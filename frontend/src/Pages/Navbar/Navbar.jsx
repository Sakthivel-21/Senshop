import React,{useEffect, useState, useContext} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import sidebar from '../../Images/side.png'
import grocery1 from '../../Images/g-4.avif'
import grocery2 from '../../Images/g-2.webp'

import axios from 'axios'
import {AuthContext} from '../UserContext'
import AOS from 'aos';
AOS.init();



function Navbar() {

  axios.defaults.withCredentials= true;

  const {user, logout} = useContext(AuthContext)

  const [show, setShow] = useState(false)

  const ShowName = () => {
    if(show == false) {
      setShow(true)
    }
    else{
      setShow(false)
    }
  }

  //const {user} = useContext(UserContext)

  //const navigate = useNavigate();

  //const [redirect, setDirect] = useState(null)
  {/*const[user, setUser] = useState(null)

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await axios.get("http://localhost:3001/profile", { withCredentials: true });
        setUser(res.data);
      } catch (err) {
        setUser(null);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    await axios.get("http://localhost:5000/api/logout", { withCredentials: true });
    setUser(null);
  };*/}

 
  

  return (

    <>
    
      
      {/*<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, ]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='swip'
      //autoplay={{delay: 3000, disableOnInteraction: false}}
    >
      <SwiperSlide>*/}

<div className='navbars'>

<div className='nav-images'>
    <img src={grocery1} alt='' className='grocery-1'></img>
    
</div>
</div>

<img src={grocery2} alt='' className='grocery-2'></img>

<div className='light-dry'>

    </div>

<div className='nav-listing'>
 
    <h2>SEN<span style={{color:'lightgreen'}}>SHOP</span></h2>

   <button  onClick={ShowName}  className='nav-imgss'><img src={sidebar} alt='' ></img></button>

    <div className='nav-pointing'>
      <ul>
        <Link to='/' className='nav-linking'><li >Home</li></Link>
        <Link to='/productsItems' className='nav-linking'><li>Products</li></Link>
        <Link to='/contact' className='nav-linking'><li>Contacts</li></Link>
      </ul>

    </div>
 
   {user ? (
                    <>
                        <Link to='/dashboard' style={{color:'white'}}><h3 className='users-data'>Welcome, {user.name}</h3></Link>
                        <Link to='/'><button onClick={logout} className='logout-button'>Logout</button></Link>
                    </>
                ) : (
                  <Link to='/login' ><button className='login-button'>Login</button></Link>
                )}
    
</div>


<div className='welcome'>
<h1  data-aos="fade-in">Welcome to <span style={{color:'lightgreen'}}>SENSHOP</span></h1>
<h3>We are delighted to serve You with <br/>
    fresh, oragnic and high quality grocries <br/>
    to your doorstep. Happy Shopping!</h3>
    <Link to='/productsItems'><button className='shop-btn'>Shop now</button></Link>
</div>

{
  show && (<div className='hide-nav'>
  <h2>SENSHOP</h2>
  <button  onClick={ShowName} className='btn-close'>❎</button>

  {
    user ? (
      <>
  <Link to='/dashboard' style={{color:'white'}}><h3 className='user-name'>Welcome,{user.name}</h3></Link>
  <Link to='/' className='user-btns'><button onClick={logout}  style={{background:'lightgreen'}}>Logout</button></Link></>
    ) : (
  <Link to='/login'  className='logs-btn' ><button style={{background:'lightgreen'}}>Login</button></Link> )
  }
  
       <ul>
       <Link to='/' className='nav-linking'><li >Home</li></Link>
        <Link to='/productsItems' className='nav-linking'><li>Products</li></Link>
        <Link to='/contact' className='nav-linking'><li>Contacts</li></Link>
        <Link to='/dashboard' className='nav-linking'><li>Dashboard</li></Link>
     
       </ul>
</div> )
}

</>
  )
}

export default Navbar;