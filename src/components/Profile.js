import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import { NavLink, Link } from "react-router-dom";

import Header from "./Header.js";
import '../App.css';

import * as Authervice from '../services/AuthService.js';

function Profile() {
  const { user, setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState(user?.password || '');

  const handleSubmit = (e) => {
    e.preventDefault();

    Authervice.updateProfile(email, password)
      .then((updatedUser) => {
        setUser(updatedUser); // Актуализираме потребителските данни
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  if (error) {
    return <div>Грешка: {error}</div>;
  }

  return (
    <>
      <div className="container-xxl position-relative p-0 bg-dark" id="navbarCollapse">
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
      </div>

      <div className="container-xxl py-5 hero-header mb-5">
        <div className="container my-5 py-5">
          <form onSubmit={handleSubmit} style={formStyles}>
            <h2>Profile Information</h2>
            <label>
              Email:
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyles}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyles}
              />
            </label>
            <button type="submit" style={buttonStyles}>Save</button>
          </form>
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
  );
}

const formStyles = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
  margin: "auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  background: "orange",
};

const inputStyles = {
  marginBottom: "15px",
  padding: "10px",
  borderRadius: "4px",
  border: "#322f2f",
};

const buttonStyles = {
  padding: "10px",
  borderRadius: "4px",
  border: "none",
  background: "#322f2f",
  color: "orange",
  cursor: "pointer",
};

export default Profile;


//Това е динамичната информация на user-а
//import { useState } from "react";

//const UserProfile = () => {
//  const [userData, setUserData] = useState({
//    name: "John Doe",
//    status: "Active", // По подразбиране статус
//  });
//
// Функция за обновяване на статус-а
//  const updateStatus = (newStatus) => {
//    setUserData((prevData) => ({
//      ...prevData,
//      status: newStatus,
//    }));
//  };
//
//  return (
//    <div className="profile-container">
//      <h1>Welcome, {userData.name}!</h1>
//      <p>Status: <strong>{userData.status}</strong></p>
//      <div className="status-buttons">
//        <button onClick={() => updateStatus("Active")}>Set Active</button>
//        <button onClick={() => updateStatus("Inactive")}>Set Inactive</button>
//        <button onClick={() => updateStatus("Busy")}>Set Busy</button>
//      </div>
//    </div>
//  );
//};

//export default UserProfile;

