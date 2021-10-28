import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./nav.css";
import CartContext from "../../Context/CartContext";

const Nav = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <Link className="link" to="/">
        <h1 className="header-title">Jossy Market</h1>
      </Link>
      <Link className="link" to="/checkout">
        <p>{cart.length}</p>
        <AiOutlineShoppingCart className="cart-icon" />
      </Link>
    </nav>
  );
};

export default Nav;
