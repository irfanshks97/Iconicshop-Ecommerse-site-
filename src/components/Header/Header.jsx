import { Navbar } from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ViewAll from "/assets/Images/categories/ViewAll.webp";
import {
  fetchAsyncCategories,
  getAllCategories,
} from "../../store/categorySlice";
import "./Header.css";
export const Header = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchAsyncCategories());
    setLoading(false);
  }, [dispatch]);

  const handleCategoriesClick = (categoryName) => {
    setShowAll(false);
    navigate(`/${categoryName}`);
  };
  return (
    <div className="header">
      <div className="row mt-4 p-5 bg-light">
        {loading ? (
          <div>Loading...</div>
        ) : (
          (showAll ? categories : categories.slice(0, 5)).map((category) => (
            <div
              key={category.id || category.name}
              className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
              id="categories"
            >
              <div className="container text-center">
                <Link
                  to={`/${category.name}`}
                  className="text-decoration-none "
                  onClick={handleCategoriesClick}
                >
                  <img
                    src={`/assets/Images/categories/${category.name}.webp`}
                    alt={category.name}
                    className="card-img-top mx-auto mb-3 rounded-circle bg-light shadow"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h6 className="card-title text-dark ">{category.name}</h6>
                  </div>
                </Link>
              </div>
            </div>
          ))
        )}
        <div
          onClick={() => setShowAll(!showAll)}
          style={{ cursor: "pointer" }}
          className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
        >
          <div className="container text-center border-0 h-100">
            <div className="container ">
              <img
                src={ViewAll}
                alt={showAll ? "View Less" : "View All"}
                className="card-img-top mx-auto mb-3 rounded-circle bg-light shadow "
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <h6 className="card-title text-dark ">
                  {showAll ? "View Less" : "View All"}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
