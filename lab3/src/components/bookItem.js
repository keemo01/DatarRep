// In the 'bookItem.js' file
import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";

function BookItem(props) {
  useEffect(() => {
    console.log("Item " + props.mybook);
  }, []);

  return (
    <div>
      <Card>
        <Card.Header>{props.mybook.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.mybook.thumbnailUrl} alt={props.mybook.title} />
            <footer className="blockquote-footer">
              {props.mybook.authors[0]}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookItem;
