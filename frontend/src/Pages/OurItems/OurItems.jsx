import React from 'react'
import './OurItems.css'
import pulses from '../../Images/pulses1.jpg'
import rices from '../../Images/rice3.webp'
import personal from '../../Images/care1.webp'
import snacks from '../../Images/snacks4.webp'
import chocolates from '../../Images/chco4.webp'
import note from '../../Images/note1.webp'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

function OurItems() {
  return (
    <>

<h2 className='items'>Our Items</h2>
<hr className='hr-line'/>

    <div className='ouritems1'>

        <div className='ouritems-1' data-aos="fade-down">
            <img src={pulses} alt=''></img>
            <h2>Varities of Pulses</h2>
            <Link to='/pulseproducts'><button className='items-button'>Shop now</button></Link>
        </div>

        <div className='ouritems-2' data-aos="fade-down">
        <img src={rices} alt=''></img>
        <h2>Varities of Rices</h2>
        <Link to='/riceproducts'><button className='items-button'>Shop now</button></Link>
        </div>

        <div className='ouritems-3' data-aos="fade-down">
        <img src={personal} alt=''></img>
        <h2>Personal care Things</h2>
        <Link to='/personalcareproducts'><button className='items-button'>Shop now</button></Link>
        </div>

    </div>

    <div className='ouritems2'>  

<div className='ouritems-4' data-aos="fade-down">
    <img src={snacks} alt=''></img>
    <h2>Varities of Snacks</h2>
    <Link to='/snacksproducts'><button className='items-button'>Shop now</button></Link>
</div>

<div className='ouritems-5' data-aos="fade-down">
<img src={chocolates} alt=''></img>
<h2>Sweetest Chocolates</h2>
<Link to='/chocolatesproducts'><button className='items-button'>Shop now</button></Link>
</div>

<div className='ouritems-6' data-aos="fade-down">
<img src={note} alt=''></img>
<h2>Note Products</h2>
<Link to='/noteproducts'><button className='items-button'>Shop now</button></Link>
</div>

</div>

  

    </>
  )
}

export default OurItems