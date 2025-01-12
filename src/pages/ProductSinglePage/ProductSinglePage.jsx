import { useEffect, useState } from "react";
import { PriceFormat } from "../../utils/PriceFormat";
import {
  fetchAsyncProductSingle,
  getProductSingle,
  getSingleProductStatus,
} from "../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import {
  addToCart,
  getCartMessageStatus,
  getCartTotal,
  setCartMessageOff,
  setCartMessageOn,
} from "../../store/cartSlice";
import CartMessage from "../../components/CartMessage/CartMessage.jsx";
export const ProductSinglePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);
  const productSingleStatus = useSelector(getSingleProductStatus);
  const CartMessageStatus = useSelector(getCartMessageStatus);

  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product?.images?.[0]) {
      setMainImage(product?.images?.[0]);
    }
  }, [product]);

  useEffect(() => {
    if (CartMessageStatus) {
      const timer = setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [CartMessageStatus, dispatch]);

  const discountedPrice =
    product?.price * (1 - product?.discountPercentage / 100);

  if (productSingleStatus === STATUS.LOADING) {
    return <Loader />;
  }

  const increaseQty = () => {
    setQuantity((prevQty) => Math.min(prevQty + 1, product?.stock || prevQty));
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => Math.max(prevQty - 1, 1));
  };

  const handleAddToCart = () => {
    const totalPrice = quantity * discountedPrice;
    dispatch(
      addToCart({
        ...product,
        quantity,
        totalPrice,
        discountedPrice,
      })
    );
    dispatch(getCartTotal());
    dispatch(setCartMessageOn(true));
  };

  const handleBuyNow = () => {
    console.log("Buy Now clicked for product:", product);
  };

  return (
    <main className="py-5 bg-light">
      <div className="container-fluid p-5">
        <div className="row bg-white p-5 shadow rounded">
          <div>
            <span className="badge fs-6 bg-info text-dark text-uppercase">
              {product?.category?.replace("-", " ")}
            </span>
          </div>
          <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
            <img
              src={mainImage || ""}
              alt="Product"
              className="img-fluid rounded"
              style={{
                maxHeight: "500px",
                objectFit: "contain",
                width: "100%",
              }}
            />
            <div className="row mt-4">
              {product?.images?.map((image, index) => (
                <div
                  key={index}
                  className="col-4 col-md-2 text-center mb-3 me-5"
                  onClick={() => setMainImage(image)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="img-fluid"
                    style={{
                      minWidth: "120px",
                      minHeight: "120px",
                      objectFit: "contain",
                      border:
                        mainImage === image
                          ? "1px solid rgb(14, 17, 19)"
                          : "none",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <h3 className="fw-bold">{product?.title}</h3>
            <p className="text-muted">{product?.description}</p>
            <div className="d-flex align-items-center mb-3">
              <span className="badge bg-danger me-2">
                Rating: {product?.rating}
              </span>
              <span className="text-muted">
                Brand: <strong>{product?.brand}</strong>
              </span>
            </div>
            <p className="text-muted">
              Category:{" "}
              <span className="text-capitalize">
                {product?.category?.replace("-", " ")}
              </span>
            </p>

            <div className="mb-3">
              <h4 className="text-info">
                {PriceFormat(discountedPrice)}{" "}
                <small className="text-decoration-line-through text-danger">
                  {PriceFormat(product?.price)}
                </small>
              </h4>
              <p className="text-success fw-bold">
                {product?.discountPercentage}% OFF
              </p>
            </div>

            <div className="d-flex align-items-center mb-4">
              <span className="me-3">Quantity:</span>
              <div className="quantity-selector d-flex align-items-center justify-content-center">
                <div className="quantity-pagination">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={decreaseQty}
                    disabled={product?.stock === 0 || quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity-value">{quantity}</span>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={increaseQty}
                    disabled={
                      product?.stock === 0 || quantity >= product?.stock
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              {product?.stock === 0 && (
                <span className="ms-3 text-danger fw-bold">Out of Stock</span>
              )}
            </div>

            <button
              className="btn btn-primary btn-lg w-100 mt-3 mb-2"
              onClick={handleAddToCart}
              disabled={product?.stock === 0}
              style={{
                borderRadius: "25px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              Add to Cart
            </button>

            <button
              className="btn btn-success btn-lg w-100 mt-2"
              onClick={handleBuyNow}
              disabled={product?.stock === 0}
              style={{
                borderRadius: "25px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {CartMessageStatus && <CartMessage />}
    </main>
  );
};
