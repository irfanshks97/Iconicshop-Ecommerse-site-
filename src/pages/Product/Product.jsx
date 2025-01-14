import { Link } from "react-router-dom";
import { PriceFormat } from "../../utils/PriceFormat";

const Product = ({ product }) => {
  if (!product) {
    return (
      <div className="card shadow-sm h-100 text-center">
        <p>Product details not available.</p>
      </div>
    );
  }

  return (
    <div className="card shadow-sm h-100" style={{ maxHeight: "380px" }}>
      <Link
        to={`/product/${product.id}`}
        className="text-decoration-none"
        aria-label={`View details for ${product.title}`}
      >
        <div className="d-flex justify-content-center p-3">
          <img
            className="card-img-top img-fluid"
            src={product.images?.[0]}
            alt={product.title || "Product image"}
            style={{
              height: "180px",
              objectFit: "contain",
              maxWidth: "100%",
            }}
          />
        </div>

        <div className="card-body text-center">
          <h6
            className="card-subtitle text-muted mb-2"
            style={{ maxWidth: "100%" }}
          >
            <strong>Brand: </strong>
            {`${product.brand || "N.A"}`}
          </h6>

          <h6 className="card-title mb-3 " style={{ maxWidth: "90%" }}>
            {product.title}
          </h6>

          <div className="d-flex justify-content-center align-items-center gap-2">
            {product.discountedPrice && (
              <span className="text-muted text-decoration-line-through">
                {PriceFormat(product.price)}
              </span>
            )}
            <span className="text-danger fw-bold">
              {PriceFormat(product.discountedPrice || product.price)}
            </span>
            {product.discountedPercentage && (
              <span className="badge bg-info text-dark">
                {product.discountedPercentage}% Off
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
