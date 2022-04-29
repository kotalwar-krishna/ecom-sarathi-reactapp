import React from 'react'
import { Nav } from '../../components/nav-bar/nav'
import { Footer } from '../../components/footer/footer';
import "./home.css";
export default function Home() {
  return (
    <div>
    <Nav />

    <div className="home-banner" id="home">
            {/* <img src="./images/banner.jpg" alt="xxx" /> */}
          <div className="banner-content">
            <h3>fresh and <span>organic</span> products for your</h3>
            <p>Better ingredients, better food, and beverages, at low prices.</p>
            <a href="#" className="primary-button">shop now</a>
          </div>
    </div>

    <section className="features" id="features">
        <h1 className="heading"> our <span>features</span> </h1>
        <div className="box-container">
          <div className="feature-card">
            <img src="images\feature-img-1.svg" alt="feature 1" />
            <h3>fresh Grocery Storage</h3>
            <p>a new grocery store designed from the ground up to offer a seamless grocery shopping experience for customers are shopping online.</p>
            <a href="./product.html" className="primary-button">Shop Now</a>
          </div>
          <div className="feature-card">
            <img src="images/feature-img-2.png" alt="" />
            <h3>free delivery</h3>
            <p>Come and get a chance to get free shipping on all orders. There is nothing like deadline for this this oofer is for all days.</p>
            <a href="#" className="primary-button">read more</a>
          </div>
          <div className="feature-card">
            <img src="images/feature-img-3.png" alt="" />
            <h3>easy payments</h3>
            <p>All Payment Methods are Accepted, for online payment you can use debit card/credit card, netbanking, Upi payment.
            </p>
            <a href="#" className="primary-button">read more</a>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}
