import React from 'react'
import "./review.css";
import { Nav } from '../../components/nav-bar/nav'
import { Footer } from '../../components/footer/footer';

export default function Review() {
  return (
    <div>
        <Nav />
        <div>
        <div className="whishlist-banner-heading">
          <h1> What <span>Customers</span> Tells about Us</h1>
        </div>
        <section className="review">
          <div className="feature-card">
            <img src="./images/user-1.png" alt="user-profile-pic" />
            <h3>Shamitab Bacchan</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum autem odit magnam. Recusandae</p>
            <p>Maharshtra, India</p>
            <a href="#" className="btn outline-btn">read more</a>
          </div>
          <div className="feature-card">
            <img src="./images/user-1.png" alt="user-profile-pic" />
            <h3>Shamitab Bacchan</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum autem odit magnam. Recusandae</p>
            <p>Maharshtra, India</p>
            <a href="#" className="btn outline-btn">read more</a>
          </div>
          <div className="feature-card">
            <img src="./images/user-1.png" alt="user-profile-pic" />
            <h3>Shamitab Bacchan</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum autem odit magnam. Recusandae</p>
            <p>Maharshtra, India</p>
            <a href="#" className="btn outline-btn">read more</a>
          </div>
          <div className="feature-card">
            <img src="./images/user-1.png" alt="user-profile-pic" />
            <h3>Shamitab Bacchan</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum autem odit magnam. Recusandae</p>
            <p>Maharshtra, India</p>
            <a href="#" className="btn outline-btn">read more</a>
          </div>
          <div className="feature-card">
            <img src="./images/user-1.png" alt="user-profile-pic" />
            <h3>Shamitab Bacchan</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum autem odit magnam. Recusandae</p>
            <p>Maharshtra, India</p>
            <a href="#" className="btn outline-btn">read more</a>
          </div>
          <div className="feature-card">
            <img src="./images/user-1.png" alt="user-profile-pic" />
            <h3>Shamitab Bacchan</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum autem odit magnam. Recusandae</p>
            <p>Maharshtra, India</p>
            <a href="#" className="btn outline-btn">read more</a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
