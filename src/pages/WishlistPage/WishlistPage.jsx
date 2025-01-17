import { useDispatch, useSelector } from "react-redux";
import {
  removeFromWishList,
  getWishListItems,
} from "../../store/wishListSlice";
import "./wishlist.css";
import { addToCart } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";

export const WishList = () => {
  const wishList = useSelector(getWishListItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const moveToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    dispatch(removeFromWishList(item.id));
  };

  const removeProductFromWishList = (id) => {
    dispatch(removeFromWishList(id));
  };

  return (
    <div className="container py-4" style={{ minHeight: "100vh" }}>
      <h1 className="text-center mb-2">Wishlist</h1>
      <p className="text-center text-muted mb-4">{wishList.length} items</p>

      {wishList.length === 0 ? (
        <div className="text-center">
          <p className="text-muted">Your wishlist is empty!</p>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Go Shopping
          </button>
        </div>
      ) : (
        <div className="row g-4">
          {wishList.map((item) => (
            <div key={item.id} className="col-md-3">
              <div className="card h-100">
                <img
                  src={item.images?.[0] || "placeholder-image.jpg"} // Image fallback
                  alt={item.title || "Product Image"}
                  className="card-img-top img-fluid"
                  style={{ maxHeight: "200px", objectFit: "contain" }}
                  onClick={() => navigate(`/product/${item.id}`)}
                />
                <div className="card-body text-center">
                  <button
                    className="btn btn-danger w-100 mb-2"
                    onClick={() => moveToCart(item)} // Pass item to cart function
                    aria-label={`Move ${item.title} to cart`}
                  >
                    Move to Cart
                  </button>
                  <button
                    className="btn btn-link text-danger p-0"
                    onClick={() => removeProductFromWishList(item.id)} // Pass ID to remove
                    aria-label={`Remove ${item.title} from wishlist`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
