import React from "react";

export const HeroPage = () => {
  return (
    <div className="header-container m-0 p-0">
      <div className="row">
        <div className="col-lg-6 pt-5 mt-5 p-5">
          <h2 className="display-6 ls-1">
            <span className="fw-bold text-success">Everything</span> You Need at
            Your <span className="fw-bold">Fingertips</span>
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
                  <p className="text-uppercase lh-sm mb-0">Customer Support</p>
                </div>
              </div>
            </div>
            <div className="d-flex gap-3 mt-5">
              <a
                href="#categories"
                className="text-uppercase btn btn-outline-success rounded-pill ps-3 pe-3"
              >
                Start Shopping
              </a>
              <button className="text-uppercase btn-home btn btn-outline-dark rounded-pill ps-3 pe-3">
                Browse Categories
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
