import React from "react";
import { Col, Row } from "react-bootstrap";

const stepsToPerform = (list) => {
  if (!list) return <div></div>;
  
  return (
    <ol>
      {list.map((step, index) => (
        <li key={index}>{step}</li>
      ))}
    </ol>
  );
};

const SelfDefenceInfo = ({ title, subTitle, linkToVideo, steps, reverse }) => {
  return (
    <>
      <Row className={`my-5 ${reverse}`}>
        <Col xs={12} lg={6} md={6} className="mb-3">
        <div className="ratio ratio-16x9">
        <iframe
          width="100%"
          height="315"
          src={linkToVideo}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
      </div>
        </Col>
        <Col
          xs={12}
          lg={6}
          md={6}
          className={`d-flex flex-column justify-content-center text-left`}
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
