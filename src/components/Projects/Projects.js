import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import cineFusion from "../../Assets/Projects/cineFusion.png";
import trello from "../../Assets/Projects/trello.png";

import googleDrive from "../../Assets/Projects/googleDrive.png";
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
              imgPath={cineFusion}
              isBlog={false}
              title="Cine Fusion"
              description="A movie discovery app built with React.js and Firebase, offering features like movie search, trailer previews, and personalized recommendations for cinema lovers."
              ghLink="https://github.com/RahulMudgal8109/Cine-Fusion"
              demoLink="https://cine-fusion-five.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={googleDrive}
              isBlog={false}
              title="Google Drive Clone"
              description=" A Google Drive clone built with React.js and Firebase, offering seamless file storage, sharing, and real-time sync capabilities for efficient cloud management."
              ghLink="https://google-drive-clone-three-pearl.vercel.app/"
              demoLink="https://google-drive-clone-three-pearl.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trello}
              isBlog={false}
              title="Trello Clone"
              description="Trello clone with task management, drag-and-drop functionality, user authentication, and real-time collaboration features."
              ghLink="https://github.com/RahulMudgal8109/TrelloClone"
              demoLink="https://trello-clone-drab-delta.vercel.app/"              
            />
          </Col>

         

         
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
