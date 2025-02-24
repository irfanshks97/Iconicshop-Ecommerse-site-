import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import shoplogo from "/assets/Images/categories/shopLogo.gif";
import { GrCart } from "react-icons/gr";
import wishlist from "/assets/Images/categories/wishlist.webp";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartItemsCount, getCartTotal } from "../../store/cartSlice";
import CartPage from "../../pages/CartPage/CartPage";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const itemsCount = useSelector(getCartItemsCount);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <>
      <nav
        className="container-fluid p-1 ps-5 pe-5 d-flex align-items-center navbar navbar-expand-md fixed-top shadow"
        style={{ backgroundColor: "#fff" }}
      >
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={shoplogo} alt="Shopping logo" height="50px" />
        </Link>

        {/* Toggler for mobile view */}
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
          <div className="search-bar mx-auto position-relative my-2 my-md-0">
            <form onSubmit={handleSearchSubmit} className="d-flex">
              <input
                className="form-control shadow-sm searchInput"
                type="text"
                placeholder="Search for products, brands, and more"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchTerm}
              />
              <button
                type="submit"
                className="btn btn-outline-dark position-absolute"
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
              >
                <FaSearch style={{ fontSize: "18px", color: "#757575" }} />
              </button>
            </form>
          </div>

          {/* Wishlist and Cart */}
          <ul className="navbar-nav d-flex align-items-center justify-content-sm-around justify-content-between flex-row p-sm-0 p-4">
            <li className="nav-item mx-3 ">
              <Link
                to="/wishList"
                className="d-flex align-items-center text-decoration-none position-relative"
              >
                <img src={wishlist} alt="wishlist" width="35px" />
              </Link>
            </li>

            {/* Cart */}
            <li className="nav-item d-flex align-items-center">
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

            {/* Login Button */}
            <li className="nav-item mx-3">
              <Link to="/login">
                <button
                  className="btn btn-outline-dark rounded-pill text-center"
                  style={{ width: "100px" }}
                >
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* CartPage */}
      <CartPage isCartVisible={isCartVisible} toggleCart={toggleCart} />
    </>
  );
};
