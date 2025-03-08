import React from 'react'
import './AboutPage.css'
import shop from '../../Images/shop.jpg'

function AboutPage() {
  return (
    <>

    <h2 className='about-head'>About Our Shop</h2>
    <hr className='hr-line'/>


    <div className='about'>
        
        <div className='about-left'>

          <div className='about-left-1'>

          </div>
          <div className='about-left-2'>

          </div>
          <div className='about-left-3'>

          </div>
          <div className='about-left-4'>

          </div>

          <img src={shop} alt='' className='abt-img'></img>
           
        </div>

        <div className='about-right'>
       
        <h2 className='abt-name'>Welcome to SENSHOP!</h2>
        
        <p className='abt-point' data-aos="fade-in">At Senshop, we’re committed to making grocery shopping easy, convenient, and sustainable. We offer a wide variety of high-quality products ranging from fresh produce to pantry essentials, all carefully curated to meet your needs. Whether you prefer organic, locally sourced, or everyday items, we’ve got something for every household.</p>
        <p className='abt-point1'>Grocery shops are very common and are required in every locality. These shops store items such as pulses, flour, rice, ghee, oils, soaps and detergents, toiletries and various other items of daily use.</p>
        </div>
        
      
       </div>
        
       <div className='about-right-1'>

       </div>
       <div className='about-right-2'>

       </div>
       <div className='about-right-3'>

       </div>
       <div className='about-right-4'>

       </div>
    </>
  )
}

export default AboutPage