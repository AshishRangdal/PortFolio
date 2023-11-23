import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'

import pickachu from '../../Assets/Projects/pikachu.png'
import typingtutor from '../../Assets/Projects/typingtutor.png'
import cryptoknight from '../../Assets/Projects/cryptoknight.png'
import passgen from '../../Assets/Projects/passgen.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color: 'white'}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pickachu}
              isBlog={false}
              title="Pikachu"
              description="The Pikachu is a Pokemon Finder Web App is your ultimate companion for embarking on an exciting journey in the world of Pokemon. Whether you're a seasoned trainer or just starting your adventure, this user-friendly web application is designed to make your quest for catching 'em all easier and more enjoyable than ever."
              link="https://github.com/AshishRangdal/Who-s-that"
              liveLink="https://pickachu.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={typingtutor}
              isBlog={false}
              title="Typing Tutor"
              description="The Typing Tutor Web App is your go-to tool for improving your typing speed and accuracy. Whether you're a student, a professional, or simply someone looking to enhance your keyboard skills, this user-friendly web application is designed to help you become a faster and more efficient typist."
              link="https://github.com/AshishRangdal/Typing-Tutor"
              liveLink="https://typing-tutor-phoenix.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoknight}
              isBlog={false}
              title="Crypto Knight"
              description="The Crypto Knight is your all-in-one solution for staying informed and managing your investments in the dynamic world of cryptocurrencies. Whether you're a seasoned crypto trader or just starting to explore the possibilities, this web application is designed to provide you with real-time data, analysis, and portfolio management tools to make informed decisions in the crypto market."
              link="https://github.com/AshishRangdal/Crypto-Knight"
              liveLink="https://crypto-knight-phoenix.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passgen}
              isBlog={false}
              title="Pass Gen"
              description="The Password Generator is your trusted tool for creating strong, unique, and secure passwords. In an age where online security is paramount, this web application simplifies the process of generating complex passwords that help safeguard your digital identity."
              link="https://github.com/AshishRangdal/Random-Password-Generator"
              liveLink="https://password-generator-phoenix.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
