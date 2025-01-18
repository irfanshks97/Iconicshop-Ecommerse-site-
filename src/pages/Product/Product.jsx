import React from "react";
import { Link } from "react-router-dom";
import { PriceFormat } from "../../utils/PriceFormat";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishList,
  getWishListItems,
  removeFromWishList,
} from "../../store/wishListSlice";
import "./product.css";
import { IoCartOutline, IoStarSharp } from "react-icons/io5";
// Custom Heart SVG Component
const Heart = ({ isInWishlist, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="30"
    height="30"
    onClick={onClick}
    style={{
      fill: isInWishlist ? "red" : "transparent",
      stroke: "black",
      strokeWidth: "0.5",
      cursor: "pointer",
      transition: "fill 0.3s ease", // Smooth transition
    }}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(getWishListItems);

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishList(product.id));
    } else {
      dispatch(addToWishList(product));
    }
  };

  return (
    <div className="card shadow-sm" style={{ minHeight: "480px" }}>
      <div className="card-header d-flex justify-content-center">
        <Link
          to={`/product/${product?.id}`}
          className="text-decoration-none"
          key={product?.id}
        >
          <img
            className="card-img-top objectfit-cover"
            src={product?.images?.[0] || "placeholder-image.jpg"}
            alt={product?.title}
            style={{
              height: "250px",
              objectFit: "contain",
            }}
          />
        </Link>
      </div>

      <div className="card-body text-start ">
        <div>
          <h3
            className="card-title mb-3 text-dark"
            style={{ maxWidth: "90%", minHeight: "10px" }}
          >
            {product?.title}
          </h3>
          <div className="mb-3 text-start">
            {[1, 2, 3, 4, 5].map((index) => (
              <IoStarSharp
                key={index}
                style={{
                  color:
                    index <= Math.floor(product.rating)
                      ? "#0dcaf0"
                      : "lightgray",
                  fontSize: "1.2rem",
                }}
              />
            ))}
          </div>
          <div className="d-flex align-items-center gap-2 text-start">
            <del> {PriceFormat(product?.price)}</del>
            <span className="text-dark fw-semibold">
              {PriceFormat(product?.discountedPrice)}
            </span>
            <span className="badge border rounded-0 fw-normal  lh-1 text-body-secondary">
              {product?.discountPercentage}% Off
            </span>
          </div>
        </div>
      </div>
      <div className="card-footer border-top text-start d-flex align-items-center row m-0 p-2">
        <span className="col-9">
          <div className="btn btn-outline-dark text-center rounded-pill w-100">
            <span>
              <IoCartOutline />
            </span>{" "}
            <span style={{ fontSize: "0.8rem" }}> Add to Cart</span>
          </div>
        </span>

        <span className="col-3">
          <span className="">
            <Heart isInWishlist={isInWishlist} onClick={handleWishlistToggle} />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Product;
