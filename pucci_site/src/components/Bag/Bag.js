import React from "react";
import { useSelector } from "react-redux";
import CarouselFade from "../Carousel/Carousel";
import "./Bag.css";

export default function Bag(props) {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  var subtotal = 0;

  const displayCart = cart.map((product, index) => {
    subtotal += parseInt(product.price, 10);
    return (
      <div className="bag-product" key={index}>
        <div className="bag-product-title">{product.title}</div>
        <div className="bag-product-price">
          Price: ${product.price || "$0.00"}
        </div>
      </div>
    );
  });

  return (
    <>
      <CarouselFade />
      <div className="bag-container">
        <div className="bag-title grid-col-span-2">
          <h1 className="cart-text">Your Pucci Bag</h1>
        </div>
        <div className="bag-cart grid-col-span-12">{displayCart}</div>
        <div className="bag-subtotal">Subtotal ${subtotal}</div>
        <button className="btn btn-success">Checkout</button>
      </div>
    </>
  );
}
