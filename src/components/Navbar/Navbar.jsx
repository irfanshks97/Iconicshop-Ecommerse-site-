import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import shoplogo from "/assets/Images/categories/shopLogo.gif";
import { GrCart } from "react-icons/gr";
import wishlist from "/assets/Images/categories/wishlist.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartItemsCount, getCartTotal } from "../../store/cartSlice";
import CartPage from "../../pages/CartPage/CartPage";

export const Navbar = () => {
  const dispatch = useDispatch();
  const itemsCount = useSelector(getCartItemsCount);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const wishList = useSelector((state) => state.wishList);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <>
      <nav
        className="container-fluid p-1 ps-5 pe-5 d-flex align-items-center navbar navbar-expand-md fixed-top shadow"
        style={{ backgroundColor: "#fff" }}
      >
        <a className="navbar-brand" href="/">
          <img src={shoplogo} alt="Shopping logo" height="50px" />
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

        <div className="collapse navbar-collapse text-dark" id="navbarContent">
          <div className="search-bar mx-auto position-relative  my-md-0 mt-sm-0 mt-4 mb-md-0 mb-4">
            <input
              className="form-control shadow-sm searchInput"
              type="text"
              placeholder="Search for products, brands, and more"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-dark position-absolute "
              style={{
                top: "40%",
                right: "15px",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                width: "30px",
                height: "30px",
              }}
              type="button"
            >
              <FaSearch style={{ fontSize: "18px", color: "#757575" }} />
            </button>
          </div>

          <ul className="navbar-nav d-flex align-items-center justify-content-sm-around justify-content-between flex-row p-sm-0 p-4">
            <li className="nav-item mx-3">
              <Link
                to="/wishList"
                className="d-flex align-items-center text-decoration-none"
              >
                <img src={wishlist} alt="wishlist" width="35px" />
                <span className="ms-2 badge bg-secondary">{wishList}</span>
              </Link>
            </li>

            <li className="nav-item d-flex align-items-center ">
              <button
                className="btn btn-outline-none position-relative"
                onClick={toggleCart}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <GrCart className="text-dark" size={30} />
                <span
                  className="badge rounded-pill bg-info text-dark position-absolute top-0 start-100 translate-middle"
                  style={{ fontSize: "0.75rem" }}
                >
                  {itemsCount}
                </span>
              </button>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-outline-dark">Login</button>
            </li>
          </ul>
        </div>
      </nav>

      <CartPage isCartVisible={isCartVisible} toggleCart={toggleCart} />
    </>
  );
};
