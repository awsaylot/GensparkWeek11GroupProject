import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { IoMdHeartEmpty } from "react-icons/io";
import './ProductCard.css';

function ProductCard() {
  return (
    <>
      <IoMdHeartEmpty className="empty-heart-icon" />
      <Card>
        <Card.Img variant="top" src="https://dummyimage.com/300" />
        <Card.Body>
          <Card.Title>Product</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
          <Button variant="outline-dark">Add to cart</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;