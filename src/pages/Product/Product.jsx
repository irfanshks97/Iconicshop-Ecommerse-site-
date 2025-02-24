import React from "react";
import { Link } from "react-router-dom";
import { PriceFormat } from "../../utils/PriceFormat";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishList,
  getWishListItems,
  removeFromWishList,
} from "../../store/wishListSlice";
import {
  IoCartOutline,
  IoStarSharp,
  IoHeartOutline,
  IoHeart,
} from "react-icons/io5";
import { addToCart } from "../../store/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(getWishListItems);
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishList(product.id));
      toast.error("Removed from wishlist!", { position: "top-right" });
    } else {
      dispatch(addToWishList(product));
      toast.success("Added to wishlist!", { position: "top-right" });
    }
  };

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity: 1 };
    dispatch(addToCart(productWithQuantity));
    toast.success("Added to cart!", { position: "top-right" });
  };

  return (
    <div className="col-12 mb-4 d-flex">
      <div className="card border-0 shadow-sm h-100 w-100">
        {/* Image Section */}
        <div className="position-relative">
          <Link to={`/product/${product.id}`} className="d-block text-center">
            <img
              className="card-img-top p-3 img-fluid"
              src={product.images[0]}
              alt={product.title}
              style={{ height: "200px", objectFit: "contain" }}
            />
          </Link>
          <button
            className="btn position-absolute top-0 end-0 m-2 text-danger"
            onClick={handleWishlistToggle}
            style={{ background: "none", border: "none" }}
          >
            {isInWishlist ? (
              <IoHeart size={26} />
            ) : (
              <IoHeartOutline size={26} />
            )}
          </button>
        </div>

        {/* Product Details */}
        <div className="card-body text-center d-flex flex-column">
          <h6 className="card-title text-truncate">{product.title}</h6>
          <div className="d-flex justify-content-center align-items-center mb-2">
            {[1, 2, 3, 4, 5].map((index) => (
              <IoStarSharp
                key={index}
                className={
                  index <= Math.floor(product.rating)
                    ? "text-warning"
                    : "text-muted"
                }
              />
            ))}
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <del className="text-muted me-2">{PriceFormat(product.price)}</del>
            <span className="fw-bold me-2">
              {PriceFormat(product.discountedPrice)}
            </span>
            <span className="badge bg-success">
              {product.discountPercentage}% Off
            </span>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="card-footer bg-white text-center">
          <button className="btn w-100" onClick={handleAddToCart}>
            <IoCartOutline /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
