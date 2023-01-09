import React from 'react'
import './Styles/footer.css'
// import {BiCopyright} from 'react-icons/bi'

const footer = () => {
  return (
    <div className='foot-container'>
      <div className="copyright">
        {/* <BiCopyright className='footer-icon'/>  */}
        <p className='madeby'>Made with ReactJS - By Vamshidhar Dawoor</p>
      </div>
      <div className="socials">
        <div className='cols-icon'>                        
            <a href='https://www.facebook.com/vamshidhar.navodaya/'>
                <i className="fa fa-facebook-square"></i>
            </a>
            <a href="www.google.com">
                <i className='fa fa-google-plus-square'></i>
            </a>
            <a href='https://www.instagram.com/_vamshi.d/'>
                <i className='fa fa-instagram'></i>
            </a>
            <a href='https://github.com/vamshidhar644'>
                <i className='fa fa-github'></i>
            </a>
            <a href='https://www.linkedin.com/in/vamshidhar-dawoor-28039b213/'>
                <i className='fa fa-linkedin'></i>
            </a>
            <a href='https://twitter.com/VAMSHIDHARDAWO1'>
                <i className='fa fa-twitter'></i>
            </a>
        </div>  
      </div>
    </div>
  )
}
export default footer