import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anukool Patel </span>
            from <span className="purple"> Varanasi, India.</span>
            <br />
            I am currently employed as a software developer at Xebia.
            <br />
            I have completed B.Tech in Computer Science and Engineering from Dr A. P. J. Abdul Kalam Technoical Unversity.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Getting known to new Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Go beyond to chase your dream!"{" "}
          </p>
          <footer className="blockquote-footer">Anukkol</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
