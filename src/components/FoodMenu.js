import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import Header from "./Header.js";
import '../App.css';

import avocado from '../assets/images/img1.jpg';
import pancakes from '../assets/images/img2.jpg';
import salad from '../assets/images/img3.jpg';
import salmon from '../assets/images/img6.webp';
import steak2 from '../assets/images/1.jpg';
import baked from '../assets/images/2.jpg';
import Ribs from '../assets/images/3.jpg';
import Eggplant from '../assets/images/4.jpg';
import Tofu from '../assets/images/5.jpg';
import Shrimp from '../assets/images/6.jpg';
import Beef from '../assets/images/7.jpg';
import avotoast from '../assets/images/avotoast.jpg';
import baget from '../assets/images/baget.jpg';
import smoothie from '../assets/images/smoothie.jpeg';
import spinach from '../assets/images/spinach.jpg';
import beef from '../assets/images/beef.jpg';
import honey from '../assets/images/honey.png';
import spagheti from '../assets/images/spagheti.webp';
import bowl from '../assets/images/bowl.jpg';
import brokule from '../assets/images/brokule.webp';


const foodItems = [
  {
    id: 1,
    category: "Breakfast",
    items: [
      { id: 101, name: "Chicken Burger", price: 20, description: "Juicy grilled chicken breast layered with fresh lettuce, tomatoes, and a tangy mayo sauce, served in a toasted sesame bun.", image: "img/menu-1.jpg" },
      { id: 102, name: "Oatmeal with Honey and Fruits", price: 15, description: " A warm and comforting bowl of oatmeal, topped with a drizzle of honey and a mix of fresh fruits like berries, bananas, and apples.", image: "img/menu-2.jpg" },
      { id: 103, name: "Avocado Toast", price: 10, description: " Creamy mashed avocado spread over crispy toasted bread, lightly seasoned with salt, pepper, and a drizzle of olive oil. Perfect for a light and healthy meal!", image: avocado },
      { id: 104, name: "Pancakes with Maple Syrup and Berries", price: 8, description: " Soft and fluffy pancakes served warm, topped with fresh berries (strawberries, blueberries) and a drizzle of sweet maple syrup.", image: pancakes },
      { id: 105, name: "Scrambled Eggs with Toast and Avocado Slices", price: 7, description: "  Creamy scrambled eggs paired with toasted whole-grain bread and ripe avocado slices, lightly seasoned with salt and pepper.", image: avotoast },
      { id: 106, name: "Smoothie Bowl", price: 11, description: "  A refreshing and nutritious smoothie made from blended frozen bananas, berries, and almond milk, topped with granola, coconut flakes, and chia seeds for a crunchy finish.", image: smoothie },
      { id: 107, name: "Bagel with Cream Cheese and Smoked Salmon", price: 9, description: "  A toasted bagel spread with rich cream cheese, layered with delicate smoked salmon, capers, and a sprinkle of fresh dill for a classic and savory breakfast.", image: baget },
      { id: 108, name: "Spinach and Cheese Pastry", price: 12, description: "  Creamy scrambled eggs paired with toasted whole-grain bread and ripe avocado slices, lightly seasoned with salt and pepper.", image: spinach },
    ],
  },
  {
    id: 2,
    category: "Lunch",
    items: [
      { id: 201, name: "Tuna Salad with Egg", price: 28, description: " A fresh salad made with tender tuna, boiled eggs, crunchy lettuce, tomatoes, cucumbers and a light dressing of lemon juice and olive oil. A perfect combination for a light and healthy lunch.", image: "img/menu-3.jpg" },
      { id: 202, name: "Chicken with Quinoa and Vegetables", price: 26, description: " Tender grilled chicken fillet served with fluffy quinoa and fresh seasonal vegetables seasoned with herbs and light butter.", image: "img/menu-4.jpg" },
      { id: 203, name: "Grilled Chicken Salad", price: 15, description: "Fresh romaine leaves, grated parmesan and crispy croutons, topped with perfectly grilled chicken fillet and creamy Caesar dressing.", image: salad },
      { id: 204, name: "Spaghetti Bolognese", price: 14, description: "Classic Italian pasta with spaghetti, generously covered with aromatic Bolognese sauce, made with beef, tomatoes and fresh spices.", image: spagheti },
      { id: 205, name: "Beef Teriyaki Bowl", price: 17, description: "Juicy pieces of beef sautéed in a sweet-salty teriyaki sauce, served over fluffy white rice and garnished with sesame seeds and green onions.", image: beef },
      { id: 206, name: "Vegetarian Quinoa Bowl", price: 18, description: "A healthy combination of quinoa, roasted sweet potato, broccoli, avocado and chickpeas, seasoned with a light lemon dressing.", image: bowl },
      { id: 207, name: "Honey Glazed Salmon with Vegetables", price: 19, description: " Juicy salmon fillet with a honey and soy sauce glaze, served with a side dish of steamed vegetables - broccoli, carrots and asparagus.", image: honey },
      { id: 208, name: "Chicken Alfredo Pasta", price: 13, description: "Creamy chicken pasta cooked with a rich Parmesan and garlic Alfredo sauce, garnished with parsley and served with garlic bread.", image: brokule },
    ],
  },
  {
    id: 3,
    category: "Dinner",
    items: [
      { id: 301, name: "Grilled Steak with Herb Butter", price: 40, description: "Juicy beef steak, perfectly grilled, topped with melting butter with herbs and garlic. Served with baked potatoes and fresh green salad.", image: steak2 },
      { id: 302, name: "Baked Salmon with Asparagus", price: 35, description: "Salmon fillet baked with lemon butter and spices, served with steamed asparagus and creamy mashed potatoes.", image: salmon },
      { id: 303, name: "Chicken Alfredo Pasta", price: 18, description: "Creamy fettuccine pasta with chicken fillets, cooked in a sauce of parmesan, garlic and cream, garnished with fresh parsley.", image: baked },
      { id: 304, name: "Vegetable Stir-Fry with Tofu", price: 20, description: "A fragrant Asian dish with fresh vegetables and tofu, sautéed in soy sauce and ginger, served over fluffy basmati rice.", image: Tofu },
      { id: 305, name: "Barbecue Ribs with Coleslaw", price: 22, description: "Classic barbecue ribs smothered in homemade BBQ sauce, served with creamy coleslaw and baked potatoes.", image: Ribs },
      { id: 306, name: "Shrimp Scampi", price: 24, description: "Fresh shrimp cooked with butter, garlic and white wine, served with linguine pasta and sprinkled with parsley.", image: Shrimp },
      { id: 307, name: "Eggplant Parmesan", price: 25, description: "Roasted eggplants topped with tomato sauce, mozzarella and parmesan, baked until golden, served with a crispy garlic baguette.", image: Eggplant },
      { id: 308, name: "Beef Bourguignon", price: 10, description: "A traditional French dish of tender veal, slow-cooked in red wine, with onions, mushrooms and carrots, served with mashed potatoes.", image: Beef },
    ],
  },
];


function FoodMenu() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="container-xxl position-relative p-0">

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <NavLink to="/" className={({ isActive }) => `navbar-brand p-0 ${isActive ? "active" : ""}`}>
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
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
              <h1 className="mb-5">Most Popular Items</h1>
            </div>
            <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                {foodItems.map((category, index) => (
                  <li className="nav-item" key={category.id}>
                    <a
                      className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 ${activeTab === index ? "active" : ""}`}
                      onClick={() => setActiveTab(index)}
                      href={`#-${category.id}`}
                    >
                      <i className="fa fa-coffee fa-2x text-primary"></i>
                      <div className="ps-3">
                        <small className="text-body">{category.category}</small>
                        <h6 className="mt-n1 mb-0">{category.category}</h6>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="tab-content row">
                {foodItems[activeTab]?.items.map((item, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded-circle"
                        src={item.image}
                        alt={item.name}
                        style={{ width: "90px", height: "90px", objectFit: "cover", animation: "none" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{item.name}</span>
                          <span className="text-primary">${item.price}</span>
                        </h5>
                        <small className="fst-italic">{item.description}</small>
                      </div>
                    </div>
                  </div>
                ))}
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
                <p>Chicago, Illinois<br />+1 (847) 630-5548</p>
                <p>Houston, Texas<br />+1 (832) 858-5524</p>
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

export default FoodMenu;