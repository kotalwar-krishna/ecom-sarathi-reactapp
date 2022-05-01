import React from 'react'
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
         {/* Footer start*/}
      <section className="groce-footer">
        <div className="groce-footer-container">
          <div className="box">
            <h3> Sarathi-Grocery <i className="fas fa-shopping-basket" /> </h3>
            <p>Lets have some Fresh Grocery at home</p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
          <div className="box">
            <h3>contact info</h3>
            <a href="#" className="links"> <i className="fas fa-phone" /> +91-1234567890 </a>
            <a href="#" className="links"> <i className="fas fa-envelope" /> sarthigroceries@gmail.com </a>
          </div>
          <div className="box">
            <h3>quick links</h3>
            <Link to="/" className="links"> <i className="fas fa-arrow-right" /> home </Link>
            <a href="./index.html" className="links"> <i className="fas fa-arrow-right" /> features </a>
            <a href="./product.html" className="links"> <i className="fas fa-arrow-right" /> products </a>
            <Link to="/about" className="links"> <i className="fas fa-arrow-right" /> about </Link>
            <Link to="/review" className="links"> <i className="fas fa-arrow-right" /> review </Link>
          </div>
          <div className="box">
            <h3>news-letter</h3>
            <p>subscribe for latest updates</p>
            <input type="email" placeholder="your email" className="email" />
            <input type="submit" defaultValue="subscribe" className="primary-button" />
          </div>
        </div>
      </section>
      {/* footer end */}
    </div>
  )
}

export { Footer }
