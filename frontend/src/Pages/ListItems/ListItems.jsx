import React from 'react'
import './ListItems.css'
import img1 from '../../Images/pulses.jpg'
import img2 from '../../Images/personal.jpg'
import img3 from '../../Images/chocolates.jpg'
import img4 from '../../Images/notes.jpg'
import img5 from '../../Images/snakes.jpg'
import img6 from '../../Images/ricc.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();


function ListItems() {
  return (
    <>

<h2 className='items'>Our Items</h2>
<hr className='hr-line'/>

    <div className='list-1'>

        

        <div className='item-1' data-aos="fade-right">
            
             <div className='item-right'  >
                 <img src={img1} alt=''></img>
                 <h3>Varities of Pulses</h3>
            </div>
        </div>
        


 
        <div className='item-2'  data-aos="fade-in">
      
             <div className='item-right' >
             <img src={img2} alt=''></img>
             <h3>Daily Personal Care Things</h3>
            </div>

        </div>
        


        <div className='item-3' data-aos="fade-left" >
       
             <div className='item-right' >
             <img src={img3} alt=''></img>
             <h3>Sweetest Chocolates</h3>
            </div>

        </div>
       
</div>

     <div className='list-2'>
        <div className='item-4' data-aos="fade-right">
        
             <div className='item-right'  >
             <img src={img4} alt=''></img>
             <h3>Notes & Books</h3>
            </div>

        </div>
        



        <div className='item-5'  data-aos="fade-in">
        
             <div className='item-right' >
             <img src={img5} alt=''></img>
             <h3>Varities of Snakes Items</h3>
            </div>

        </div>



        <div className='item-6' data-aos="fade-left">
        
             <div className='item-right' >
             <img src={img6} alt=''></img>
             <h3>Varieties of Rices</h3>
            </div>

        </div>
       


    </div>
    </>
  )
}

export default ListItems