import React, { useContext } from "react";
import { shopContext } from "../StateContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, AddItem, removeFromCart, setCartItems, getCartTotal } =
    useContext(shopContext);

  const removeItem = (product) => {
    const removeItem = cartItems.filter((x) => x.id !== product.id);
    setCartItems(removeItem);
  };
  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };
const clearCart=()=>{
  setCartItems([])
}
  return (
    <>
    <div>
      <header className="header">
        <h1>Complete your order </h1>
      </header>
    </div>
      <div className="cart">
        {cartItems.map((product) => (
          <React.Fragment key={product.id}>
            <div className="cart-items">
              <img src={product.Image} alt="...loading" width="500px" />
              <div className="cart-desc">
                <h3>{product.Name}</h3>
                <p>${product.Price}</p>
                <>
                  <button className="btn" onClick={() => AddItem(product)}>
                    +
                  </button>{" "}
                  {product.quantity}{" "}
                  <button
                    className="btn"
                    onClick={() => {
                      const cartItem = cartItems.find(
                        (x) => x.id === product.id
                      );
                      if (cartItem.quantity === 1) {
                        handleRemoveFromCart(product);
                      } else {
                        removeFromCart(product);
                      }
                    }}
                  >
                    -
                  </button>
                  <p>
                    {product.quantity > 1
                      ? `$${product.quantity * product.Price}`
                      : ""}
                  </p>
                  <br />
                  <button className="btn" onClick={() => removeItem(product)}>
                    Remove
                  </button>
                </>
              </div>
            </div>
          </React.Fragment>
        ))}

        {cartItems.length === 0 ? (
          <>
            <div style={{ textAlign: "center" }}>
              <h3>Your Cart is Empty</h3>
              <Link to="/">
                <button className="btn">Continue Shopping</button>
              </Link>
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <p>Total Price = ${getCartTotal()}</p>
            <button className="btn" onClick={()=>clearCart()}>Checkout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
