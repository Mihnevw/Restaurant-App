import { NavLink, Link } from "react-router-dom";
import AboutOne from "./AboutOne.js";
import Header from "./Header.js";
import '../App.css';

function About() {

  return (
    <>
      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <NavLink to="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-utensils me-3"></i>Restaurant
            </h1>
            <img src="img/logo.png" alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <Header />
        </nav>

        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container my-5 py-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 text-center text-lg-start">
                <div className="row g-3">
                  <div className="col-6 text-start">
                    <img className="img-fluid rounded-circle w-100" src="img/about-1.jpg" alt="" style={{ animation: "none" }} />
                  </div>
                  <div className="col-6 text-start">
                    <img className="img-fluid rounded-circle w-75" src="img/about-2.jpg" style={{ marginTop: '25%', animation: "none" }} alt="" />
                  </div>
                  <div className="col-6 text-end">
                    <img className="img-fluid rounded-circle w-75" src="img/about-3.jpg" alt="" style={{ animation: "none" }} />
                  </div>
                  <div className="col-6 text-end">
                    <img className="img-fluid rounded-circle w-100" src="img/about-4.jpg" alt="" style={{ animation: "none" }} />
                  </div>
                </div>
              </div>
              <AboutOne />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-container py-5 bg-dark text-white text-center">
          <div className="container">
            <div className="row">
              {/* Contact Section */}
              <div className="col-lg-4">
                <h4 className="footer-title">Contact</h4>
                <p className="footer-label">E-MAIL:</p>
                <p>
                  <Link to="https://www.abv.bg/" className="footer-link" target="_blank" rel="noopener noreferrer">
                    stilianmh@abv.bg
                  </Link>
                </p>
                <p className="footer-label">GitHub:</p>
                <p>
                  <Link to="https://github.com/Mihnevw" className="footer-link" target="_blank" rel="noopener noreferrer">
                    GitHub-Profile
                  </Link>
                </p>
                <p className="footer-label">PHONE:</p>
                <p>Chicago, Illinois<br />+1 (847) 630-5546</p>
                <p>Houston, Texas<br />+1 (832) 858-5521</p>
                <p>Sliven, Bulgaria<br />+359 885 362 108</p>
              </div>

              {/* Call to Action Section */}
              <div className="col-lg-4">
                <h4 className="footer-title">Ready to impress?</h4>
                <button className="footer-btn" >
                  <Link to="/contact" className="footer-link">CONTACT US <span>&#x2794;</span></Link>
                </button>
                <h4 className="footer-title">Join our team</h4>
                <button className="footer-btn" >
                  <Link to="/apply" className="footer-link">APPLY <span>&#x2794;</span></Link>
                </button>
              </div>

              {/* <span>&#x2794;</span> Sitemap Section */}
              <div className="col-lg-4">
                <h4 className="footer-title">Sitemap</h4>
                <ul className="footer-list">
                  <li><Link to="/" className="footer-link">Home</Link></li>
                  <li><Link to="/services" className="footer-link">Services</Link></li>
                  <li><Link to="/work" className="footer-link">Work</Link></li>
                  <li><Link to="/about" className="footer-link">About</Link></li>
                  <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default About;
