import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { TbSchool } from 'react-icons/tb';
import { FaUniversalAccess } from 'react-icons/fa';
import { GiSchoolBag } from 'react-icons/gi';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Circle from './Shapes/Circle';

import './Styles/resume.css';
import { ListGroupItem } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Container className="Resume-container">
        <div className="Resume-Column Skills-container">
          <h4>Skills</h4>
          <Card style={{ width: '22rem' }} className="Skills-Card">
            <Card.Header className="Skill-Header">Frontend</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>HTML</ListGroup.Item>
              <ListGroup.Item>CSS</ListGroup.Item>
              <ListGroup.Item>Javascript</ListGroup.Item>
              <ListGroup.Item>Reactjs</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card style={{ width: '22rem' }} className="Skills-Card">
            <Card.Header className="Skill-Header">Backend</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Nodejs</ListGroup.Item>
              <ListGroup.Item>MySQL</ListGroup.Item>
              <ListGroup.Item>PHP</ListGroup.Item>
              <ListGroup.Item>MangoDB</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div className="Resume-Column Education-container">
          <h4>Education</h4>
          <ListGroup variant="flush">
            <ListGroup.Item className="education-title">
              <TbSchool className="edu-icon" />
              <div className="edu-graduation">
                <h4>Vellore Institute of Technology, Amaravati</h4>
                <h6>B.Tech in Computer Science : 2020 - present</h6>
                <p>8.64 CGPA</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="education-title">
              <FaUniversalAccess className="edu-icon" />
              <div className="education-college">
                <h4>Akshara Junior College, Hyderabad</h4>
                <h6>Maths, Physics, Chemistry : 2018 - 2020</h6>
                <p>96.8%</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="education-title">
              <GiSchoolBag className="edu-icon" />
              <div className="education-school">
                <h4>Jawahar Navodaya Vidyalaya, Wargal, Medak</h4>
                <h6>CBSE : 2013 - 2018</h6>
                <p>81.4%</p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
        {/* <Circle backgroundColor="orangered" top="190vh" right="-50vh" /> */}
      </Container>
    </>

    //     </section>
    // </div>
  );
}
