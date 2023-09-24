import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MyNav = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="container">
        <div className="myRow w-100">
          <div className="myLogo">
            <Link to="/" className="logo">
              CART APP
            </Link>
          </div>
          <div className="myLinks d-flex align-items-center">
            <Link to="/">Products</Link>
            <Link to="/cart" className="cartDiv">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="proNumber">{cart.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MyNav;
