import React, { useState } from "react";
import { projects } from "../projects";
import { Card, Button, Row, Col } from "react-bootstrap"; // Import Bootstrap components
import '../styles/Portfolio.css'; // Import custom styles

const Portfolio = () => {
  const [hovered, setHovered] = useState(null);

  // Hover effect handling
  const handleHoverIn = (index) => {
    setHovered(index);
  };

  const handleHoverOut = () => {
    setHovered(null);
  };

  return (
  <div className="portfolio-background">
    <h2 className="text-left mb-5">My Portfolio</h2>
    <div className="container my-5">
      
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} sm={6} className="mb-4">
            <Card
              className="project-card" style={{backgroundImage: `url(${project.image})`,backgroundSize: "cover",
                backgroundPosition: "center", }} onMouseEnter={() => handleHoverIn(index)} onMouseLeave={handleHoverOut} >
              <Card.Body className={`card-body ${hovered === index ? "hovered" : ""}`}>
                <Card.Title className="text-black">{project.name}</Card.Title>
                <div className="d-flex justify-content-between">
                  <Button variant="link" href={project.githubLink}target="_blank" className="text-black" >
                    <img src="../src/assets/github-mark.png"alt="GitHub" width={30} height={30} />
                  </Button>
                  <Button
                    variant="link" href={project.renderLink} target="_blank" className="text-black" >
                    Live Demo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </div>
  );
};

export default Portfolio;
