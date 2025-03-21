import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "../Header.js";
import '../../App.css';

function Contact() {
  const [verified, setVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCaptchaChange = (value) => {
    setVerified(!!value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!verified) {
      alert("Моля, потвърдете че не сте робот!");
      return;
    }

    // Проверка дали всички полета са попълнени
    if (!formData.name || !formData.email || !formData.message) {
      alert("Моля попълнете всички задължителни полета.");
      return;
    }

    console.log("Sending form data:", formData);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Проверка на отговора от сървъра
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || `HTTP грешка ${response.status}`);
      }

      console.log("Server response:", responseData);

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "", phone: "" });
      alert("Благодарим за съобщението!");

    } catch (error) {
      console.error("Грешка:", error);
      setError('Възникна грешка при изпращането на съобщението!');
    }
  };

  return (
    <>
      <div className="container-xxl position-relative p-0">
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
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

          <div className="container-xxl py-5 hero-header mb-5">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Bulgaria</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+359 875439160</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>stilianmihnev@gmail.com</p>
            <div className="button">
              {['twitter', 'facebook-f', 'youtube', 'linkedin-in'].map((icon, index) => (
                <a key={index} className="btn btn-outline-light btn-social" href={`https://${icon}.com/`} target="_blank" rel="noopener noreferrer">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-container">
            <h2>Contact Us</h2>
            {submitted ? (
              <div className="text-center">
                <p className="text-green-500">Благодарим! Съобщението ви е изпратено успешно.</p>
                <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Върнете се към началната страница</Link>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {error && <div className="text-red-500">{error}</div>}
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Your name"
                    required
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Your email"
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    placeholder="Your number"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Message
                  <textarea
                    name="message"
                    value={formData.message}
                    placeholder="Your message"
                    onChange={handleChange}
                    required
                    rows="5"
                  />
                </label>
                <ReCAPTCHA
                  sitekey="6Ldqi5EqAAAAAJfQarJBgjKBBDoqUsq8cpUV__w2"
                  onChange={handleCaptchaChange}
                />
                <button
                  type="submit"
                  style={buttonStyles}
                //disabled={!verified}
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer секция */}
      <Footer />
    </>
  )
}

const Footer = () => (
  <div className="footer-container py-5 bg-dark text-white text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <h4 className="footer-title">Контакти</h4>
          <p className="footer-label">E-MAIL:</p>
          <p>
            <Link to="mailto:stilianmh@abv.bg" className="footer-link">
              stilianmh@abv.bg
            </Link>
          </p>
          <p className="footer-label">GitHub:</p>
          <p>
            <Link to="https://github.com/Mihnevw" className="footer-link" target="_blank" rel="noopener noreferrer">
              GitHub Профил
            </Link>
          </p>
        </div>

        <div className="col-lg-4">
          <h4 className="footer-title">Бързи линкове</h4>
          <button className="footer-btn">
            <Link to="/contact" className="footer-link">Контакт <span>&#x2794;</span></Link>
          </button>
          <h4 className="footer-title mt-4">Кариери</h4>
          <button className="footer-btn">
            <Link to="/apply" className="footer-link">Кандидатствай <span>&#x2794;</span></Link>
          </button>
        </div>

        <div className="col-lg-4">
          <h4 className="footer-title">Карта на сайта</h4>
          <ul className="footer-list">
            {['/', '/services', '/work', '/about', '/contact'].map((path, index) => (
              <li key={index}>
                <Link to={path} className="footer-link">
                  {path === '/' ? 'Начало' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const buttonStyles = {
  background: "#322f2f",
  color: "orange",
  padding: "12px 24px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "16px",
  marginTop: "20px"
};

export default Contact;
