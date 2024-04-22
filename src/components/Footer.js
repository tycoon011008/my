import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
} from "react-icons/ai";
import { BsDiscord, BsTelegram } from "react-icons/bs";
import { Tooltip } from 'react-tooltip';
import { SiGmail } from "react-icons/si"

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Luis Bayer</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} LB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/octo8ight"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail id="mail1"/>
                <Tooltip anchorSelect="#mail1" place="top">viroz180237@gmail.com</Tooltip>
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BsDiscord id="discord1"/>
                <Tooltip anchorSelect="#discord1" place="top">viroz180237_1</Tooltip>
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BsTelegram id="telegram1"/>
                <Tooltip anchorSelect="#telegram1" place="top">@Stradivarius_2</Tooltip>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
