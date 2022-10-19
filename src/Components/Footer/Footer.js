import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Audio and Subtitle
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Meida Center
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Security
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    contact us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link btn buttonCustom">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-xs-6 d-none d-sm-block">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Audio Describtion
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Investor Relation
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Legal Provision
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-xs-6 d-none d-sm-block">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Help center
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Jobs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Cookie Preference
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-xs-6 d-none d-sm-block">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Gift Cards
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Term of Use
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Corporate Information
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>&copy; 2022 Movies, All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
