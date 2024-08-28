import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const NewsItem = ({ imgUrl, title, content, link }) => {
  return (
    <Col lg={3} md={4} sm={6} className="d-flex justify-content-center">
      <Card style={{ width: "18rem" }} >
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <Button variant="primary" >
            <a
              href={link}
              className="text-decoration-none text-white align-self-end"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NewsItem;
