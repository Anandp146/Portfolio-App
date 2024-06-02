import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards.jsx";
import Particle from "../Particle";
import sn from "../../Assets/Projects/studynotion.png";
import job from "../../Assets/Projects/Job.png";
import chat from "../../Assets/Projects/chat.png";
import Music from "../../Assets/Projects/Music.png";
import ls from "../../Assets/Projects/ls.png";
import ec from "../../Assets/Projects/Ecommerce.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>Here are some of my main projects.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sn}
              isBlog={false}
              title="Ed-Tech "
              description="Ed-tech is a fully functional ed-tech platform that enables students to consume and rate as well as enables to teachers to create educational content. The platform is built using the MERN stack (MongoDB, Express.js, React.js, Node."
              ghLink="https://github.com/Anandp146/Edu_Tech.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Job Portal"
              description="This application is designed to provide a platform for users to find and apply for job opportunities. It is built using the MERN (MongoDB, Express.js, React, Node.js) stack. "
              ghLink="https://github.com/Anandp146/JOB-portal.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Music}
              isBlog={false}
              title="Music Streaming App"
              description="A 'Musify' is a music streaming application or service designed to replicate the fundamental features and capabilities of a well-known music streaming platform. "
              ghLink="https://github.com/Anandp146/mymusicapp.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat-App"
              description="A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js), Socket.io for real-time communication, and JWT for secure authentication."
              ghLink="https://github.com/Anandp146/chat-app-mern.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ls}
              isBlog={false}
              title="Library Management System"
              description="Developed a robust system with secure user authentication and efficient book management using MERN stack with Typescript."
              ghLink="https://github.com/Anandp146/Library-App.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ec}
              isBlog={false}
              title="E-commerce"
              description="Developed website using react.js and Redux for frontend, used My SQL database with Strapi CMS and also added payment facility with Stripe’s payment gateway"
              ghLink="https://github.com/Anandp146/Ecommerce.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
