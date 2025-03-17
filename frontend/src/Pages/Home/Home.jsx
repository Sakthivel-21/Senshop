import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import AboutPage from '../AboutPage/AboutPage'
import ListItems from '../ListItems/ListItems'
import BelieveUs from '../BelieveUs/BelieveUs'
import Contact from '../Contact/Contact'
import OurItems from '../OurItems/OurItems'


function Home() {

  return (

    <div className='home'>
      
      <Navbar/>
     <AboutPage/>
     <OurItems/>
     <BelieveUs/>
      <Contact/>
      
    </div>

  )
}

export default Home