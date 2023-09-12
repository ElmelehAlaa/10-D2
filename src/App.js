import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
// import AllTheBooks from './components/AllTheBooks'
import { Col, Container, Row } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";
// import { Component, useState } from "react";
import CommentArea from "./components/CommentArea";
import { useState } from "react";

const App = () => {
  // state = {
  //   selectedAsin: "",
  // };
  const [selectedAsin, setSelectedAsin] = useState("");
  const setAsin = (asin) => setSelectedAsin(asin);

  return (
    <Container style={{ maxWidth: "100%" }}>
      <MyNav />
      <MyJumbotron />
      {/* <AllTheBooks /> */}
      <Row>
        <Col xs={6}>
          <BookList books={fantasy} setAsin={setAsin} asin={selectedAsin} />
        </Col>

        {selectedAsin ? (
          <Col xs={6}>
            <CommentArea asin={selectedAsin} />
          </Col>
        ) : (
          <Col xs={6}>
            <p className="sticky-top" style={{ top: "50px" }}>
              Seleziona un libro per vedere i commenti!
            </p>
          </Col>
        )}
      </Row>
      <MyFooter />
    </Container>
  );
};

export default App;
