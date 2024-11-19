import { NavLink } from "react-router-dom";
import { useState } from "react";

import Header from "./Header";
import '../App.css';

import avocado from '../assets/images/img1.jpg';
import pancakes from '../assets/images/img2.jpg';
import salad from '../assets/images/img3.jpg';
import pasta from '../assets/images/img4.jpg';
import steak from '../assets/images/img5.jpg';
import salmon from '../assets/images/img6.webp';
import salmon2 from '../assets/images/img7.jpg';

const foodItems = [
  {
    id: 1,
    category: "Breakfast",
    items: [
      { id: 101, name: "Chicken Burger", price: 20, description: "Ipsum ipsum clita erat amet dolor justo diam", image: "img/menu-1.jpg" },
      { id: 102, name: "Oatmeal with Honey and Fruits", price: 15, description: "Ipsum ipsum clita erat amet dolor justo diam", image: "img/menu-2.jpg" },
      { name: "Avocado Toast", price: 10, description: "Fresh avocado on toasted bread", image: avocado },
      { name: "Pancakes", price: 12, description: "Fluffy pancakes with syrup", image: pancakes },
    ],
  },
  {
    id: 2,
    category: "Lunch",
    items: [
      { id: 201, name: "Tuna Salad with Egg", price: 28, description: "Ipsum ipsum clita erat amet dolor justo diam", image: "img/menu-3.jpg" },
      { id: 202, name: "Chicken with Quinoa and Vegetables", price: 26, description: "Ipsum ipsum clita erat amet dolor justo diam", image: "img/menu-4.jpg" },
      { name: "Grilled Chicken Salad", price: 15, description: "Chicken with fresh greens", image: salad },
      { name: "Pasta Primavera", price: 14, description: "Pasta with fresh vegetables", image: pasta },
    ],
  },
  {
    id: 3,
    category: "Dinner",
    items: [
      { id: 301, name: "Steak", price: 40, description: "Juicy grilled steak with rosemary", image: steak },
      { id: 302, name: "Salmon Fillet", price: 35, description: "Grilled salmon with lemon butter sauce", image: salmon },
      { name: "Salmon", price: 18, description: "Grilled salmon with lemon", image: salmon2 },
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
              <i className="fa fa-utensils me-3"></i>Restorant
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
                      href={`#tab-${category.id}`}
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
              <div className="tab-content">
                {foodItems[activeTab]?.items.map((item, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={item.image}
                        alt={item.name}
                        style={{ width: "80px" }}
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
    </>
  );
}

export default FoodMenu;