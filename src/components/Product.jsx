import React, { useContext } from "react";
import { shopContext } from "../StateContext";

const Product = ({ product }) => {
  const { cartItems, removeFromCart, AddItem } = useContext(shopContext);

  const { Name, Price, Image, id } = product;

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  console.log(cartItems);
  return (
    <div className="product">
      <img src={Image} alt="loading..." width="300px" />

      <div className="description">
        <p>
          <strong>{Name}</strong>
        </p>
        <p>
          <strong>${Price}</strong>{" "}
        </p>
      </div>
      <div className="btn-box">
        {!cartItems.find((x) => x.id === id) ? (
          <button className="btn" onClick={() => AddItem(product)}>
            Add To Cart
          </button>
        ) : (
          <>
            <button className="btn" onClick={() => AddItem(product)}>
              +
            </button>
            {cartItems.find((item) => item.id === id).quantity}{" "}
            <button
              className="btn"
              onClick={() => {
                const cartItem = cartItems.find((item) => item.id === id);
                if (cartItem.quantity === 1) {
                  handleRemoveFromCart(product);
                } else {
                  removeFromCart(product);
                }
              }}
            >
              -
            </button>
            <br />
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
