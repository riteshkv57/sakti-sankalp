import React from "react";
import { Col, Row } from "react-bootstrap";

const stepsToPerform = (list) => {
  if (list === null || list === undefined) return <div></div>;
  let i = 0;
  
  const steps = list.map((step) => {
    return <li key={i}>{list[i++]}</li>;
  });

  return <ol>{steps}</ol>;
};

const SelfDefenceInfo = ({ title, subTitle, linkToVideo, steps, reverse }) => {
  return (
    <>
      <Row className={`my-5 ${reverse}`}>
        <Col xs={12} lg={6} md={6} className="mb-3">
          <video controls autoPlay loop muted width="100%">
            <source src={linkToVideo} type="video/mp4"></source>
          </video>
        </Col>
        <Col
          xs={12}
          lg={6}
          md={6}
          className={`d-flex flex-column justify-content-center text-left  `}
        >
          <h3 className="mb-3">{title}</h3>
          <p className="mb-3">{subTitle}</p>
          <h5>To perform:</h5>
          {stepsToPerform(steps)}
        </Col>
      </Row>
    </>
  );
};

export default SelfDefenceInfo;
