import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import shoplogo from "/assets/Images/categories/shopLogo.gif";
import Cart from "/assets/Images/categories/Cart.png";
import wishlist from "/assets/Images/categories/wishlist.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Toggle function to show or hide the cart sidebar
  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <nav
      className="navbar navbar-expand-md ps-5 fixed-top shadow d-flex align-items-center"
      style={{ height: "80px", backgroundColor: "#fff" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={shoplogo} alt="Shopping logo" width="160px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="search-bar mx-auto w-75 position-relative">
            <input
              className="form-control shadow-sm searchInput"
              type="text"
              placeholder="Search for products, brands, and more"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-dark position-absolute"
              style={{
                top: "50%",
                right: "15px",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                padding: "0",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                height: "30px",
              }}
              type="button"
            >
              <FaSearch style={{ fontSize: "18px", color: "#757575" }} />
            </button>
          </div>

          <ul className="navbar-nav align-items-center me-5">
            <li className="nav-item me-5">
              <Link to="/wishList">
                <img src={wishlist} alt="wishlist" width="40px" />
              </Link>
            </li>
            <li className="nav-item me-3">
              <button className="btn btn-outline-dark">Login</button>
            </li>

            <li className="nav-item">
              <button className="btn btn-outline-none" onClick={toggleCart}>
                <img src={Cart} width="35px" />
                <span className="position-absolute badge rounded-pill bg-info text-dark">
                  {0}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
