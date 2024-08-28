import React, { useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import news from "./newsapi";
import NewsItem from "./NewsItem";

const NewsList = (props) => {
  const [term, setTerm] = useState("women empowerment");
  const [newsList, setNewsList] = useState([]);

  const onNewsFetched = async () => {
    const response = await news.get("", {
      params: {
        q: term,
      },
    });

    setNewsList(response.data.articles);
  };

  onNewsFetched();

  const renderedNews = newsList.map((item) => {
    return (
      <NewsItem
        key={item.publishedAt + item.url}
        title={item.title}
        content={item.description}
        imgUrl={item.urlToImage}
        link={item.url}
      />
    );
  });

  if (newsList === null || newsList.length === 0) {
    return (
      <div className="text-center">
        <Spinner className="my-5 " animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      </div>
    );
  }

  return (
    <>
      <Container>
        <h1 className="text-center text-decoration-none my-5">
          Latest News in Women Empowerment
        </h1>
        <Row className="gx-3 gy-5 mb-5">{renderedNews}</Row>
      </Container>
    </>
  );
};

export default NewsList;
