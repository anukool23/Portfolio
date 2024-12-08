import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostman, SiSlack, SiVercel,SiMacos,} from "react-icons/si";
import { DiVisualstudio} from "react-icons/di";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <p className="tech-text">Mac OS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
        <p className="tech-text">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="tech-text">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p className="tech-text">Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p className="tech-text">Vercel</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
