// import { Component } from "react";
import { Card, Col } from "react-bootstrap";
// import CommentArea from "./CommentArea";

const SingleBook = (props) => {
  return (
    <Col xs={"4"}>
      <Card
        onClick={() => {
          props.setAsin(props.book.asin);
        }}
        style={{
          border: props.book.asin === props.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
