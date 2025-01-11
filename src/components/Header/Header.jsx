import { Navbar } from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ViewAll from "/assets/Images/categories/ViewAll.png";
import {
  fetchAsyncCategories,
  getAllCategories,
} from "../../store/categorySlice";

export const Header = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(fetchAsyncCategories());
    setLoading(false);
  }, [dispatch]);

  return (
    <div className="header">
      <div style={{ height: "50px" }}>
        <Navbar />
      </div>
      <div className="row mt-4 p-5 bg-light">
        {loading ? (
          <div>Loading...</div>
        ) : (
          (showAll ? categories : categories.slice(0, 5)).map((category) => (
            <div
              key={category.id || category.name}
              className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
            >
              <div className="card shadow text-center border-0 h-100">
                <Link to={`/${category.name}`} className="text-decoration-none">
                  <img
                    src={`/assets/Images/categories/${category.name}.png`}
                    alt={category.name}
                    className="card-img-top p-2 mx-auto mt-3"
                    style={{ width: "50%", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title text-dark fw-bold">
                      {category.name}
                    </h6>
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
          <div className="card shadow-lg text-center border-0 h-100">
            <div
              className="card-img-top p-3 mx-auto mt-3"
              style={{ width: "75%", height: "110px", objectFit: "contain" }}
            >
              <img
                src={ViewAll}
                alt={showAll ? "View Less" : "View All"}
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </div>
            <div className="card-body">
              <h6 className="card-title text-dark fw-bold">
                {showAll ? "View Less" : "View All"}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
