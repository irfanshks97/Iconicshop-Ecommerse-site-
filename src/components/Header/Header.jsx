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
      <Navbar />
      <div className="header-container">
        <div className="row">
          <div className="col-lg-6 pt-5 mt-5 p-5">
            <h2 className="display-6 ls-1">
              <span className="fw-bold text-success">Everything</span> You Need
              at Your <span className="fw-bold">Fingertips</span>
            </h2>
            <p className="fs-6 mt-5 text-muted">
              From fashion to gadgets, home essentials to wellness products –
              explore a world of options all in one place. Shop the best deals
              now!
            </p>

            <div className="row my-5">
              <div className="col">
                <div className="row text-dark">
                  <div className="col-auto">
                    <p className="fs-2 fw-bold lh-sm mb-0">2M+</p>
                  </div>
                  <div className="col">
                    <p className="text-uppercase lh-sm mb-0">
                      Products Available
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row text-dark">
                  <div className="col-auto">
                    <p className="fs-2 fw-bold lh-sm mb-0">1M+</p>
                  </div>
                  <div className="col">
                    <p className="text-uppercase lh-sm mb-0">Happy Customers</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row text-dark">
                  <div className="col-auto">
                    <p className="fs-2 fw-bold lh-sm mb-0">200+</p>
                  </div>
                  <div className="col">
                    <p className="text-uppercase lh-sm mb-0">
                      Categories to Explore
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row text-dark">
                  <div className="col-auto">
                    <p className="fs-2 fw-bold lh-sm mb-0">24/7</p>
                  </div>
                  <div className="col">
                    <p className="text-uppercase lh-sm mb-0">
                      Customer Support
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-3 mt-5">
                <a
                  href="#categories"
                  className="btn btn-primary text-uppercase fs-6 rounded-pill px-4 py-3 mt-3"
                >
                  Start Shopping
                </a>
                <a
                  href="#categories"
                  className="btn btn-dark text-uppercase fs-6 rounded-pill px-4 py-3 mt-3"
                >
                  Browse Categories
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                      width: "150px",
                      height: "150px",
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
                style={{ width: "85%", objectFit: "cover" }}
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
