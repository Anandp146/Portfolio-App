import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I am <span className="purple">Anand Parmar </span>
            from <span className="purple"> Jamnagar, Gujarat, India.</span>
            <br />I have a keen interest in{" "}
            <span className="purple">Programming</span> & exploring new
            technologies.
            <br />I am currently pursuing{" "}
            <span className="purple">
              B.Tech in Information Technology (IT)
            </span>{" "}
            in <span className="purple">Charusat University.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Process is more important than results."{" "}
          </p>
          <footer className="blockquote-footer"></footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
