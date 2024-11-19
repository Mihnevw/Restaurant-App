import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import { AuthContext } from "./context/AuthContext";
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import FoodMenu from "./components/FoodMenu";
import Reservation from "./components/Reservation";
import TeamSquad from "./components/TeamSquad";
import TestiMonial from "./components/TestiMonial";
import ServiceAll from "./components/CardBoxes/ServiceAll";
import LoginForm from "./components/Login";
import LogoutForm from "./components/Logout";
import RegisterForm from "./components/Register";
import CreateForm from "./components/Create";
import Video from "./components/Sound";
import Navigation from "./components/Navigation";

const initialAuthState = {
  _id: '',
  email: '',
  password: '',
  accessToken: '',
}


function App() {
  const [user, setUser] = useLocalStorage('user', initialAuthState);

  const login = (data) => {
    setUser(data);
  };

  const logout = () => {
    setUser(initialAuthState)
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div className="container">
        <Header />

        <main id="site-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/logout" element={<LogoutForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/video" element={<Video />} />
            <Route path="/about" element={<About />} />
            <Route path="/create" element={<CreateForm />} />
            <Route path="/service" element={<ServiceAll />} />
            <Route path="/menu" element={<FoodMenu />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/team" element={<TeamSquad />} />
            <Route path="/testimonial" element={<TestiMonial />} />
          </Routes>
        </main>

        <Link to="/" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></Link>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
