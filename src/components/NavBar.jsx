import { ShoppingCart } from "phosphor-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { shopContext } from "../StateContext";

const NavBar = () => {
  const { cartItems } = useContext(shopContext);
  return (
    <div className="nav-bar">
      <div className="links">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            marginRight: "10px",
            color: "white",
          }}
        >
          Home
        </Link>

        <Link to="cart" >
          <ShoppingCart size={32} color="white" />
          <span className="cart-cc">
            <span className="length">({cartItems.length})</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
