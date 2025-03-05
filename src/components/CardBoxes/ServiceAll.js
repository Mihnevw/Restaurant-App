import { NavLink, Link } from 'react-router-dom';

import './Services.css';
import Header from '../Header.js';

function ServiceAll() {
  return (
    <>
      <div className='container-xxl position-relative p-0'>
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
        <div className='container-xxl py-5 bg-dark hero-header mb-5'>
          <div className='container my-5 py-5'>
            <div className='row align-items-center g-5'>
              <div className='col-lg-6 text-center text-lg-start'>
                <div className='row g-3'>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                    <h5>24/7 Service</h5>
                    <p>Experience round-the-clock support to ensure your satisfaction at any hour.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                    <h5>Gourmet Menu</h5>
                    <p>We offer a variety of dishes prepared with fresh and quality products.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-truck text-primary mb-4"></i>
                    <h5>Fast Delivery</h5>
                    <p>Our delivery is available 24/7 to get you delicious food on time.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="1s">
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-glass-cheers text-primary mb-4"></i>
                    <h5>Events and Parties</h5>
                    <p>We organize private events, parties and special dinners.</p>
                  </div>
                </div>
              </div>
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
                  <a href="https://www.abv.bg/" className="footer-link" target="_blank" rel="noopener noreferrer">
                    stilianmh@abv.bg
                  </a>
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

              {/* Sitemap Section */}
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

export default ServiceAll;