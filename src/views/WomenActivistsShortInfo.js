import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const WomenActivistsShortInfo = ({ imgurl, title, content, reverse }) => {
  return (
    <>
      <Row className={`my-5 ${reverse} `}>
        <Col xs={12} lg={6} md={6} className="mb-3">
          <Image width="100%"  src={imgurl} />
        </Col>
        <Col
          xs={12}
          lg={6}
          md={6}
          className={`d-flex flex-column justify-content-center text-left `}
        >
          <h3 className="mb-3">{title}</h3>
          <p className="mb-3">{content}</p>
        </Col>
      </Row>
    </>
  );
};

export default WomenActivistsShortInfo;
