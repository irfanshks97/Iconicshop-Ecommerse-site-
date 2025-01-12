import Product from "../../pages/Product/Product";
import Loader from "../Loader/Loader";

const ProductList = ({ products }) => {
  return (
    <div className="container-fluid my-4">
      {products.length === 0 ? (
        <div className="text-center py-5">
          <Loader />
        </div>
      ) : (
        <div className="row gy-4">
          {products.map((product) => {
            const discountedPrice =
              product.price -
              product.price * (product.discountPercentage / 100);

            return (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                key={product.id}
              >
                <Product product={{ ...product, discountedPrice }} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductList;
