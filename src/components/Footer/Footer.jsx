import "./Footer.css";
export const Footer = () => {
  return (
    <footer
      className="text-light pt-4 pb-2"
      style={{ backgroundColor: "#07326A" }}
    >
      <div className="container">
        {/* Brand Section */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h3 className="text-uppercase text-custom-heading">Iconic Shop</h3>
            <p className="text-custom ">
              Your one-stop destination for all your needs
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="row d-flex justify-content-center p-sm-0 ps-5">
          {/* Column 1 */}
          <div className="col-6 col-md-6 col-lg-3 mb-3">
            <h5 className="text-uppercase text-custom-heading">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-custom  text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-custom  text-decoration-none">
                  Careers
                </a>
              </li>
              <li>
                <a href="#!" className="text-custom  text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-custom  text-decoration-none">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-6 col-md-6 col-lg-3 mb-3">
            <h5 className="text-uppercase text-custom-heading">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-decoration-none text-custom">
                  Payments
                </a>
              </li>
              <li>
                <a href="#!" className="text-custom text-decoration-none">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#!" className="text-custom text-decoration-none">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#!" className="text-custom text-decoration-none">
                  Cancellation & Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-6 col-md-6 col-lg-3 mb-3">
            <h5 className="text-uppercase text-custom-heading">Our Group</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.flipkart.com"
                  target="blank"
                  className="text-custom text-decoration-none"
                >
                  Flipkart
                </a>
              </li>
              <li>
                <a href="#!" className="text-custom text-decoration-none">
                  Myntra
                </a>
              </li>
              <li>
                <a href="#!" className="text-custom text-decoration-none">
                  Cleartrip
                </a>
              </li>
              <li>
                <a href="#!" className="text-custom text-decoration-none">
                  Shopsy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-6 col-md-6 col-lg-3 mb-3">
            <h5 className="text-uppercase text-custom-heading">Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-custom text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#!" className="text-custom text-decoration-none">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#!" className="text-custom text-decoration-none">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Address Section */}
        <div className="row mt-4 ps-sm-0 ps-5">
          <div className="col-12 col-md-6 mb-3">
            <h5 className="text-uppercase text-custom-heading">
              Office Address
            </h5>
            <p className="text-custom ">
              Iconic Shop Easy Solutions, Building No. Galaxy A6, Kausar Baugh,
              Kondhwa, Pune, Maharashtra, India
            </p>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <h5 className="text-uppercase text-custom-heading">Mail Us</h5>
            <p className="text-custom ">support@iconicshop.com</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-4 mb-4">
        <p className="text-custom  mb-0">
          © {new Date().getFullYear()} Iconic Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
