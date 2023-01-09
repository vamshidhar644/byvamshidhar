import React, { useState } from 'react';
import '../Styles/about.css';
import { CertificateData, InternshipData, ProjectsData } from './Data';
import ProjectSlider from './ProjectSlider';
import CertificateSlider from './CertificateSlider';
import InternshipSlider  from './InternshipSlider';

export default function About() {
  return (
      <div id="about" className='AboutContianer'>
        
        {/* <div className='Down-wave'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fill-opacity="1" d="M0,320L48,288C96,256,192,192,288,149.3C384,107,480,85,576,90.7C672,96,768,128,864,165.3C960,203,1056,245,1152,266.7C1248,288,1344,288,1392,288L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div> */}

        <div className='headers'>
          <h6 align="center">Get to Know</h6>
          <h2 align="center">About Me</h2>
          </div>
        <div className="container about-container">
          <p>
            Coming from a background in coding, I'm a multidisciplinary
            developer and designer. I started my coding journey almost two years
            ago and now I'm working on a full-length websites as personal
            projects. But still exploring other technologies and frameworks that
            catch my interest!. At present I'm working in Web Resource
            department in IEEE Student Chapter in VIT-AP
          </p>
          <div className="about-content">
            <ProjectSlider slides={ProjectsData}/>
            <CertificateSlider slides={CertificateData}/>
            <InternshipSlider slides={InternshipData}/>
          </div>
        </div>
      </div>
  );
}
