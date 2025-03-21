import { useState, useContext } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext.js";

//import * as AuthService from '../services/AuthService.js';
import Header from "./Header.js";

function Reservation() {
  const { user, reservation } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [people, setPeople] = useState(1);
  const [specialRequest, setSpecialRequest] = useState('');
  const [error, setError] = useState('');
  const [dateTime, setDateTime] = useState('');


  const reservationNandler = async (e) => {
    e.preventDefault();

    if (!user) {
      alert('Моля влезте в профила си');
      navigate('/login');
    }

    // Подготвям данните за резервацията
    const reservationData = {
      email,
      name,
      people,
      specialRequest,
      dateTime
    };

    try {
      console.log(reservationData);
      // Извикваме метода за резервация от AuthService
      const response = await fetch("http://localhost:5000/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reservationData),
      });

      const responseData = await response.json();

      // Проверка на отговора от сървъра
      if (!response.ok) {
        throw new Error(responseData.error || `HTTP грешка ${response.status}`);
      }

      // Ако е успешна резервацията, обаждаме се на функцията за актуализиране на състоянието
      reservation(responseData);
      alert('Успешна резервация');
      navigate('/');
    } catch (error) {
      console.error("Error during reservation:", error);
      setError('Неуспешна резервация!');
    }
  };

  return (
    <>
      <div className="container-xxl position-relative p-0" data-wow-delay="0.1s">
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
            <NavLink to="/" end className="navbar-brand p-0">
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
        </div>
        <div className="row g-0">
          <div className="col-md-6">
            <div className="video">
              <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                <span></span>
              </button>
            </div>
          </div>
          <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="videoModalLabel">Video</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <iframe
                    id="videoFrame"
                    width="100%"
                    height="400px"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube Video: Reservation"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 bg-dark d-flex align-items-center">
            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
              <h1 className="text-white mb-4">Book A Table Online</h1>

              <form onSubmit={reservationNandler} method="POST">
                {error && <div style={errorStyle}>{error}</div>}
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name"
                        value={name} onChange={(e) => setName(e.target.value)} required />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email"
                        value={email} onChange={(e) => setEmail(e.target.value)} required />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating date" id="date3" data-target-input="nearest">
                      <input type="text" className="form-control datetimepicker-input" id="datetime" placeholder="Date & Time"
                        value={dateTime} onChange={(e) => setDateTime(e.target.value)} required />
                      <label htmlFor="datetime">Date & Time</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select className="form-select" id="select1" value={people} onChange={(e) => setPeople(e.target.value)} required>
                        <option value="1">People 1</option>
                        <option value="2">People 2</option>
                        <option value="3">People 3</option>
                      </select>
                      <label htmlFor="select1">No Of People</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Special Request" id="message"
                        value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)} style={{ height: "100px" }} />
                      <label htmlFor="message">Special Request</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5 bg-dark hero-header mb-5"></div>
      <div className="footer">
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
          </div >
        </footer >
      </div >
    </>
  )
}

const errorStyle = {
  color: '#D8000C',
  backgroundColor: '#FFBABA',
  padding: '10px',
  borderRadius: '5px',
  marginBottom: '15px',
  textAlign: 'center',
};

export default Reservation;