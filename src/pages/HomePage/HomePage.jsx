import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAsyncProducts,
  getAllProducts,
  getAllProductsStatus,
} from "../../store/productSlice";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import ProductList from "../../components/ProductList/ProductList";

export const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductsStatus);

  useEffect(() => {
    dispatch(fetchAsyncProducts(192));
  }, [dispatch]);

  const productByCategory = useMemo(() => {
    if (!products) {
      return {};
    }
    return products.reduce((categories, product) => {
      const category = product.category || "Uncategorized";
      if (!categories[category]) categories[category] = [];
      categories[category].push(product);
      return categories;
    }, {});
  }, [products]);
  return (
    <div className="bg-light text-start py-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h3 className="mb-5">Browse Our Wide Range of Products</h3>
            {productStatus === STATUS.LOADING ? (
              <div className="text-center py-5">
                <Loader />
              </div>
            ) : (
              Object.entries(productByCategory).map(([category, products]) => (
                <div key={category} className="mb-5 mx-5">
                  <div className="shadow-sm">
                    <h4 className="mb-4 text-muted text-start border-bottom pb-4 text-dark">
                      Most popular{" "}
                      <strong className="text-dark">{category}</strong> products
                    </h4>
                    <ProductList products={products} />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
