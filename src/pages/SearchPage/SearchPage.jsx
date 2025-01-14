import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import ProductList from "../../components/ProductList/ProductList";
import {
  fetchAsyncSearchProduct,
  getSearchProducts,
  getSearchProductsStatus,
  clearSearch,
} from "../../store/searchSlice";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const { query } = useParams();
  const searchProducts = useSelector(getSearchProducts);
  const searchProductsStatus = useSelector(getSearchProductsStatus);

  useEffect(() => {
    if (query) {
      dispatch(clearSearch());
      dispatch(fetchAsyncSearchProduct(query));
    }
  }, [dispatch, query]);

  if (searchProductsStatus === STATUS.LOADING) {
    return <Loader />;
  }

  if (
    searchProducts.length === 0 &&
    searchProductsStatus === STATUS.SUCCEEDED
  ) {
    return (
      <div className="container">
        <h3>No products found for {query}.</h3>
      </div>
    );
  }

  return (
    <main>
      <div className="search-content container p-5">
        <h3 className="mb-2">Search results for {query}:</h3>
        <ProductList products={searchProducts} />
      </div>
    </main>
  );
};
