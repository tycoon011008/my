import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/DE_Luis Bayer_fullstack.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
// import { Viewer } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from 'react-pdf-viewer/default-layout';
// import 'react-pdf-viewer/core/lib/styles/index.css';
// import 'react-pdf-viewer/default-layout/lib/styles/index.css';
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  // const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    setWidth(window.innerWidth);
    // document.getElementById("page").addEventListener("wheel", ev => {
    //   console.log(ev);
    // });
  }, []);


  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
         {/* <Viewer
            fileUrl={pdf}
            plugins={[
                // Register plugins
                defaultLayoutPluginInstance
            ]}
          /> */}
          <Document file={pdf} className="d-flex justify-content-center">
            <Page className="page" pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
