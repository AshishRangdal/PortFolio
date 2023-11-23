import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Particle from '../Particle'
import Resumecontent from './ResumeContent'

import pdf from '../../Assets/AshishResume2023.docx'
import {AiOutlineDownload} from 'react-icons/ai'

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{justifyContent: 'center', position: 'relative'}}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Frontend developer [Apprite Tech]"
              date="May 2023 - present"
              content={[
                'Learned and experiment with React.js, Rest API, Postman, ThunderClient, Firebase, Multi-Lingual, Chat support.',
                'Build fully responsive and dynamic web apps',
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Head Dexter Innofest Codemaster"
              date="Sep 2022 - March 2023"
              content={[
                'The role of a Head of Coding Contest is crucial in managing and overseeing coding competitions, hackathons, or programming challenges. This role involves a combination of organizational, technical, and leadership responsibilities.',
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Master of computer application"
              date="2021 - 2023"
              content={[
                `CGPA: 9.10/10 `,
                'I was complete my post grad degree fron PAH Solapur University',
              ]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `1st Rank in GeeksForGeeks DSA Problem Solving`,
                `3nd rank in college from MCA Degree.`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{justifyContent: 'center', position: 'relative'}}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  )
}

export default Resume
