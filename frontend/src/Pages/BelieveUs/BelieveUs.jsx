import React from 'react'
import './BelieveUs.css'
import img1 from '../../Images/belieee.webp'

function BelieveUs() {
  return (
    <>

    <h2 className='head'>Believe Us</h2>
    <hr className='hr-line'/>
    
    

    <div className='believe-content'>

    <div className='believeus' >

        <div className='believe-1' data-aos="flip-left">
           <h3 className='heads'>Fresh & Organic Produce</h3>
           <p className='point'>Sourced directly from local farms</p>
        </div>

        <div className='believe-2' data-aos="flip-left">
            <h3 className='heads'>Affordable Prices</h3>
            <p className='point'>Quality Products at the best rates</p>
        </div>

        <div className='believe-3' data-aos="flip-left">
             <h3 className='heads'>Wide Variety</h3>
             <p className='point'>Groceries, dairy, snacks, and more under one roof</p>
        </div>

        <div className='believe-4' data-aos="flip-left">
              <h3 className='heads'>Home Delievery</h3>
              <p className='point'>Convenient Shopping from the comfort of your home</p>
        </div>

        <div className='believe-5'data-aos="flip-left">
              <h3 className='heads'>Customer Satisfication</h3>
              <p className='point'>Your happiness is our priority</p>
        </div>
 
        <div className='believe-6' data-aos="flip-left">
              <h3 className='heads'>Our goal</h3>
              <p className='point'>Provide a seamless Shopping Experience</p>
        </div>

        <div className='believeus-2' data-aos="flip-right">
            <img src={img1} alt=''></img>
        </div>

        </div>

    </div>
    </>
  )
}

export default BelieveUs