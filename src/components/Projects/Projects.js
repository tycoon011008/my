import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import picsart from "../../Assets/Projects/piratenation.png";
import lingwars from "../../Assets/Projects/garnish.png";
import algernon from "../../Assets/Projects/algernon.png";
import zeedz from "../../Assets/Projects/zeedz.png";
import nutrition from "../../Assets/Projects/shopify.png";
import agnostiq from "../../Assets/Projects/agnostiq.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zeedz}
              isBlog={false}
              title="Zeedz"
              description="The game UI implementation includes user log-in and inventory management for the player's digital collectibles stored on the Flow blockchain."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://www.zeedz.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agnostiq}
              isBlog={false}
              title="Agnostiq"
              description="Agnostiq is the team behind covalent an open source distributed computing platform built for AI, HPC and quantum computing."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://agnostiq.ai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algernon}
              isBlog={false}
              title="Algernon"
              description="A 1st-person 3D maze exploration game written entirely in JavaScript, React, and WebGL, using Three.js and react-three-fiber."
              // ghLink="https://github.com/soumyajit4419/Algernon"
              demoLink="https://excalo.itch.io/algernon"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={picsart}
              isBlog={false}
              title="Pirate Nation"
              description="An on-chain role-playing game where the player can quest, craft, and battle other players across the high seas to discover treasure and unexpected surprises."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://piratenation.game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nutrition}
              isBlog={false}
              title="EasyComposites"
              description="The requirement was to implement a pixel perfect, SEO-optimized, accessible, page-speed optimized project, which was completed successfully."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.easycomposites.co.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lingwars}
              isBlog={false}
              title="Garnish"
              description="Chicken-verse was an NFT project for which I built a 3D Dungeon Crawler demo. The game was used to promote the project and be built on in the future."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://demos.studiogarnish.com/vids/CHKN-DEMO.mp4" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
