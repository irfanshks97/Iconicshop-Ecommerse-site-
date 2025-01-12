import { useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import { STATUS } from "../../utils/status";
import {
  fetchAsyncProductsOfCategories,
  getAllProductsByCategory,
  getCategoryProductsStatus,
} from "../../store/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const CategoryProductsPage = () => {
  const dispatch = useDispatch();
  const categoryProducts = useSelector(getAllProductsByCategory);
  const categoryProductsStatus = useSelector(getCategoryProductsStatus);
  const { category } = useParams();
  useEffect(() => {
    console.log("Category being fetched:", category);
    dispatch(fetchAsyncProductsOfCategories(category.replace(" ", "-")));
  }, [dispatch, category]);

  const products = categoryProducts.products || [];

  return (
    <div className="container-fluid">
      <div className="container">
        <div>
          <h4 className="mt-5 text-dark">
            See our {category.replace("-", " ")} products
          </h4>
        </div>
        {categoryProductsStatus === STATUS.LOADING ? (
          <Loader />
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </div>
  );
};
export default CategoryProductsPage;
