import "./CartMessage.css";
import checkmark from "/assets/Images/categories/Check-mark.webp";

const CartMessage = () => {
  return (
    <div className="cart-message text-center">
      <div className="cart-message-icon">
        <img src={checkmark} alt="correct" />
      </div>
      <h6 className="text-white fs-14 fw-5">
        An item has been added to your shopping cart
      </h6>
    </div>
  );
};

export default CartMessage;
