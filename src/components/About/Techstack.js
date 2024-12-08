import React from 'react';
import {Col, Row} from 'react-bootstrap';
import { DiFirebase, DiGit, DiJavascript1, DiMongodb, DiNodejs, DiPostgresql, DiReact, DiRedis } from 'react-icons/di';
import { SiNextdotjs } from 'react-icons/si';


function Techstack() {
    return (
        <div>
            <Row style={{justifyContent:"center", paddingBottom:"50px"}}>
            <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
            <p className="tech-text">JavaScript</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
            <p className="tech-text">Node JS</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiReact />
            <p className="tech-text">React</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiPostgresql />
            <p className="tech-text">Postgers DB</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
            <p className="tech-text">Mongo DB</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <SiNextdotjs />
            <p className="tech-text">Next JS</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiGit />
            <p className="tech-text">Git</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiFirebase />
            <p className="tech-text">Firebase</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiRedis />
            <p className="tech-text">Redis</p>
            </Col>
            </Row>
        </div>
    )
}

export default Techstack;