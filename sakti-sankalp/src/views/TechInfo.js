import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const TechInfo = ({ imgurl, title, content, link, reverse }) => {
  return (
    <>
      <Row className={`my-5 ${reverse} `}>
        <Col xs={12} lg={6} md={6} className="mb-3">
          <Image className="w-100" src={imgurl} />
        </Col>
        <Col
          xs={12}
          lg={6}
          md={6}
          className={`d-flex flex-column justify-content-center text-left `}
        >
          <h3 className="mb-3">{title}</h3>
          <p className="mb-3">{content}</p>
          {/* <Button> */}
          <a
            href={link}
            target="_blank"
            className="text-white text-decoration-none bg-primary text-center py-2 rounded-pill"
            rel="noreferrer"
          >
            Learn more
          </a>
          {/* </Button> */}
        </Col>
      </Row>
    </>
  );
};

export default TechInfo;
