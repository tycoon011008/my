import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Luis Bayer </span>
            from <span className="purple"> Munich, Germany.</span>
            <br />
            {/* I am currently employed as a software developer at Juspay.
            <br /> */}
            I have got <span className="purple">Bachelor's Degree</span> in Computer Science.
            <br />
            As a <span className="purple">Full-stack developer</span>, I know how to turn your ideas into real-life applications to solve your customers' challenges.
            <br />
            Good <span className="purple">solving problem skills</span> and love to <span className="purple">challenge new skills.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Well done is better than well said!"{" "}
          </p>
          <footer className="blockquote-footer">Luis</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
