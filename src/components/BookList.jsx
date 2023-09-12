import { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Form } from "react-bootstrap";

const BookList = (props) => {
  // state = {
  //   searchQuery: "",

  // };
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Col>
        <Form.Group>
          <Form.Label>Search a book</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form.Group>
      </Col>

      <Col xs={12}>
        <div className="d-flex flex-wrap">
          {props.books
            .filter((book) => book.title.toLowerCase().includes(searchQuery))
            .map((book) => (
              <SingleBook book={book} key={book.asin} setAsin={props.setAsin} asin={props.asin} />
            ))}
        </div>
      </Col>
    </>
  );
};

export default BookList;
