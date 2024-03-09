/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const NewsList = ({ newsItems }) => (
  <Container>
    {newsItems.map((item, index) => (
      <Row className="mb-2" key={index}>
        <Col xs={12}>
          <span className="text-muted">{index + 1}.</span>
          <a href={item.url} className="text-decoration-none">{item.title}</a>
          <small className="text-muted">({item.source})</small>
        </Col>
        <Col xs={12}>
          <small className="text-muted">
            {item.points} points by {item.author} {item.timePosted} | hide | {item.comments} comments
          </small>
        </Col>
      </Row>
    ))}
  </Container>
);
export default NewsList;
