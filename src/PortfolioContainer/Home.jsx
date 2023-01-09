import React from 'react';
import './Styles/Home.css';
import Circle from './Shapes/Circle'

export default function Home() {
  return (
    <div className="home-container">        
        <Circle backgroundColor="orangered" top="50vh" right="150vh"/>
      <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details" align="center">
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, it's me !<br/> <span className='highlighted-text'>VAMSHIDHAR DAWOOR</span>
                        </span>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            <h6>
                                {" "}
                                Student, Web Dev
                            </h6>
                            <span className='details-info'>
                                Building applications with Front and Back End
                            </span>
                        </span>
                    </div>  <br/>
                    <div className='profile-options'>
                        <a href='#contact'>
                            <div className='btn highlighted-btn'>
                                Hire Me
                            </div>
                        </a>
                        <a href='Resume.pdf' download="Resume.pdf">
                            <div className='btn highlighted-btn'>Get Resume</div>
                        </a>
                    </div>
                    
                    <div className="colz">  
                        <div className='colz-icon'>                        
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
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    </div>
  );
}
