import { Routes, Route, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { AuthContext } from "./context/AuthContext.js";

import useLocalStorage from "./hooks/useLocalStorage.js";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import FoodMenu from "./components/FoodMenu.js";
import Reservation from "./components/Reservation.js";
import TeamSquad from "./components/TeamSquad.js";
import TestiMonial from "./components/TestiMonial.js";
import ServiceAll from "./components/CardBoxes/ServiceAll.js";
import LoginForm from "./components/Login.js";
import LogoutForm from "./components/Logout.js";
import RegisterForm from "./components/Register.js";
import CreateForm from "./components/Create.js";
import Video from "./components/Sound.js";
import Error from "./components/Error.js";
import Profile from "./components/Profile.js";
import Contact from "./components/InformationClient/Contact.js";

import './App.css';

const initialAuthState = {
  _id: '',
  email: '',
  password: '',
  accessToken: '',
}

function App() {
  const [user, setUser] = useLocalStorage('user', initialAuthState);
  const location = useLocation();

  const login = (data) => {
    setUser(data);
  };

  const logout = () => {
    setUser(initialAuthState)
  };

  const reservation = (data) => {
    setUser(data);
  }

  const idProfile = JSON.parse(localStorage.getItem('user')) || initialAuthState;

  return (
    <AuthContext.Provider value={{ user, login, logout, reservation, idProfile }}>
      <div className="fullscreen-container">
        <Header />

        <main id="site-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/logout" element={<LogoutForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/video" element={<Video />} />
            <Route path="/about" element={<About />} />
            <Route path="/create" element={<CreateForm />} />
            <Route path="/service" element={<ServiceAll />} />
            <Route path="/menu" element={<FoodMenu />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/team" element={<TeamSquad />} />
            <Route path="/testimonial" element={<TestiMonial />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>

        <Link to={location.pathname} className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></Link>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
