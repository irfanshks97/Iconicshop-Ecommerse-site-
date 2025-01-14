import "./CartPage.css";
import { useSelector, useDispatch } from "react-redux";
import empty from "/assets/Images/categories/empty.webp";
import {
  getAllCarts,
  removeFromCart,
  toggleCartQty,
  clearCart,
} from "../../store/cartSlice";
import { PriceFormat } from "../../utils/PriceFormat";
import { Link } from "react-router-dom";

const CartPage = ({ isCartVisible, toggleCart }) => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const { itemsCount, totalAmount } = useSelector((state) => state.cart);

  return (
    <div className={`cart-sidebar ${isCartVisible ? "show" : ""}`}>
      {/* Header */}
      <div className="cart-header d-flex justify-content-between align-items-center px-4 py-3">
        <h4 className="m-0">Your Cart</h4>
        <button
          className="btn-close"
          onClick={toggleCart}
          aria-label="Close"
        ></button>
      </div>

      {/* Content */}
      <div className="cart-content p-4">
        {carts.length === 0 ? (
          <div className="text-center">
            <img
              src={empty}
              alt="Empty cart"
              className="img-fluid mb-4 empty-cart-img"
              style={{ maxWidth: "250px" }}
            />
            <h5 className="text-muted">Your shopping cart is empty.</h5>
            <Link to="/" className="btn btn-primary mt-3" onClick={toggleCart}>
              Go Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="cart-items">
              {carts.map((cart) => (
                <div
                  key={cart.id}
                  className="cart-item d-flex align-items-center mb-4"
                >
                  <img
                    src={cart.images?.[0]}
                    alt={cart.title}
                    className="cart-item-img"
                  />
                  <div className="ms-3 flex-grow-1">
                    <h6 className="mb-1">{cart.title}</h6>
                    <p className="text-muted mb-2">
                      Unit Price: {PriceFormat(cart.discountedPrice)}
                    </p>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() =>
                          dispatch(toggleCartQty({ id: cart.id, type: "DEC" }))
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{cart.quantity}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() =>
                          dispatch(toggleCartQty({ id: cart.id, type: "INC" }))
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-end">
                    <p className="text-success mb-2">
                      {PriceFormat(cart.totalPrice)}
                    </p>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => dispatch(removeFromCart(cart?.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="cart-summary mt-4">
              <div className="d-flex justify-content-between mb-3">
                <h5>Total ({itemsCount} items):</h5>
                <h5 className="text-success">{PriceFormat(totalAmount)}</h5>
              </div>
              <div className="d-flex gap-3">
                <button
                  className="btn btn-danger flex-grow-1"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear Cart
                </button>
                <button className="btn btn-primary flex-grow-1">
                  Check Out
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
