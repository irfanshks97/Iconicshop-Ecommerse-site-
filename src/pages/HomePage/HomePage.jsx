import React, { useEffect } from "react";
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

  return (
    <main>
      <div className="bg-light text-start py-4">
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-12">
              <h3 className="mb-5">Browse Our Wide Range of Products</h3>
              {productStatus === STATUS.LOADING && (
                <div className="text-center py-5" aria-busy="true">
                  <Loader />
                </div>
              )}
              {productStatus === STATUS.FAILED && (
                <div className="text-center py-5">
                  <p>Failed to load products. Please try again later.</p>
                </div>
              )}
              {productStatus === STATUS.SUCCEEDED && (
                <React.Suspense fallback={<Loader />}>
                  <ProductList products={products} />
                </React.Suspense>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
