import React, { useState } from 'react';
import { InternshipData } from './Data';
import Card from 'react-bootstrap/Card';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const ProjectSlider = ({ slides }) => {
  const [Projects, setProjects] = useState(0);

  const projectLength = slides.length;

  const nextSlide = () => {
    setProjects(Projects === projectLength - 1 ? 0 : Projects + 1);
  };

  const prevSlide = () => {
    setProjects(Projects === 0 ? projectLength - 1 : Projects - 1);
  };

  return (
    <Card className="Card">
      <Card.Header className='Card-Header'>
      <h5>Internships</h5>
      <div className="arrows">
        <AiOutlineLeft className="left-arrow" onClick={prevSlide} />
        <AiOutlineRight className="right-arrow" onClick={nextSlide} />
      </div>
      </Card.Header>
      <Card.Body className='SlideCard'>
      {InternshipData.map((slide, index) => {
        return (
          <div
            className={index === Projects ? 'slide active' : 'slide'}
            key={index}
          >
            {index === Projects && (
              <div className='Info'>
                <Card.Title>{slide.title}</Card.Title>
                <h5>{slide.subtitle}</h5>
                <p>{slide.desc}</p>
              </div>
            )}
          </div>
        );
      })}
      </Card.Body>
    </Card>
  );
};

export default ProjectSlider;
