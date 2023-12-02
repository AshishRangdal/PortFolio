import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";

import pdf from "../../Assets/AshishResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Frontend developer [Appristine Technology]"
              date="May 2023 - present"
              content={[
                "Learned and experiment with React.js, Rest API, Postman, ThunderClient, Firebase, Multi-Lingual, Chat support.",
                "Build fully responsive and dynamic web apps",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Head Dexter Innofest Codemaster"
              date="Sep 2022 - March 2023"
              content={[
                "The role of a Head of Coding Contest is crucial in managing and overseeing coding competitions, hackathons, or programming challenges. This role involves a combination of organizational, technical, and leadership responsibilities.",
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
                "Successfully debugged my way through a postgraduate degree from PAH Solapur University, achieving a 9.10 CGPA, proving that even with complex algorithms, I can always find the right solution.",
              ]}
            />
            <Resumecontent
              title="BSC [ECS]"
              date="2018 - 2021"
              content={[
                `CGPA: 9.14/10 `,
                "Successfully compiled my undergraduate studies at Dayanand College, achieving a 9.14 CGPA, proving that I can handle even the most complex data structures",
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
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
