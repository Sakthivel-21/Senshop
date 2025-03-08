import React from 'react'
import './Contact.css'
import con from '../../Images/fruit2.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

function Contact() {
  return (
    <>

<h2 className='contact'>Get in Touch</h2>
<hr className='hr-line'/>

    <div className='contact-content'>
          <img src={con} alt=''></img>
    </div>

    <div className='contact-form'>
               <div class="form-groups" data-aos="fade-down">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div class="form-groups" data-aos="fade-down">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div class="form-groups" data-aos="fade-down">
                    <label for="message">Your Message</label>
                    <textarea id="message" name="message" rows="6" required></textarea>
                </div>
                <button type="submit" class="submit-btn" data-aos="fade-down">Submit</button>
    </div>
    </>
  )
}

export default Contact