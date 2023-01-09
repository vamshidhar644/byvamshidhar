import React, {useRef, useState} from 'react'
import '../Styles/contact.css'
import emailjs from 'emailjs-com'
import {RiServiceLine} from 'react-icons/ri'
import {HiMail} from 'react-icons/hi'
import {FiPhoneCall} from 'react-icons/fi'
import Sent from './Sent'

const Contact = () => {
  const [msgSent, setMsgSent] = useState(false);
  const form = useRef();

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_oyqwsnm', form.current, 'QO8EmqeKYHw_T80LO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 

      setMsgSent(true);

      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('message').value = '';
  }

  return (
    <section id='contact'>
      <div className="contact-container">
        <h1><RiServiceLine/> Contact me</h1>
        <div className='form'>
          <h3>Hello!</h3>
          <form className='contact-parent' ref={form} onSubmit={sendEmail} action="">
            <div className='contact-details'>
              <input type="text" id="name" name='name' placeholder="Your name" required/>
              <input type="email" id='email' name='email' placeholder='Email id' required/>
              <input type="phone" id='phone' name='phone' placeholder='Phone no.' required/>
            </div>
            <div className='message'>  
              <textarea  id="message" rows="4" name='message' placeholder='How can I help you?'></textarea>
              <div className="submit">
                <button type='submit' className='submit-btn'>send</button>   
                <Sent open={msgSent} onClose={() => setMsgSent(false)}/>
                <div className="contact-me">
                  <p>
                    <HiMail className='contact-icon'/>
                    <span>vamshidhardawoor644@gmail.com</span>
                  </p>
                  <p>
                    <FiPhoneCall className='contact-icon'/>
                    <span>+91-9704527941</span>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
