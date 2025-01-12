export const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2">
      <div className="container">
        {/* Brand Section */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h3 className="text-uppercase text-warning">Iconic Shop</h3>
            <p className="text-light">
              Your one-stop destination for all your needs
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="row d-flex justify-content-center p-sm-0 ps-5">
          {/* Column 1 */}
          <div className="col-6 col-md-6 col-lg-3 mb-3">
            <h5 className="text-uppercase text-warning">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  Careers
                </a>
              </li>
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-6 col-md-6 col-lg-3 mb-3">
            <h5 className="text-uppercase text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  Payments
                </a>
              </li>
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  Cancellation & Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-6 col-md-6 col-lg-3 mb-3">
            <h5 className="text-uppercase text-warning">Our Group</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.flipkart.com"
                  target="blank"
                  className="text-light text-decoration-none"
                >
                  Flipkart
                </a>
              </li>
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  Myntra
                </a>
              </li>
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  Cleartrip
                </a>
              </li>
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  Shopsy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-6 col-md-6 col-lg-3 mb-3">
            <h5 className="text-uppercase text-warning">Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Address Section */}
        <div className="row mt-4 ps-sm-0 ps-5">
          <div className="col-12 col-md-6 mb-3">
            <h5 className="text-uppercase text-warning">Office Address</h5>
            <p className="text-light">
              Iconic Shop Easy Solutions, Building No. Galaxy A6, Kausar Baugh,
              Kondhwa, Pune, Maharashtra, India
            </p>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <h5 className="text-uppercase text-warning">Mail Us</h5>
            <p className="text-light">support@iconicshop.com</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-4 mb-4">
        <p className="text-light mb-0">
          © {new Date().getFullYear()} Iconic Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
