import React from 'react'
import "./about.css";
import { Nav } from '../../components/nav-bar/nav'
import { Footer } from '../../components/footer/footer';

export default function About() {
  return (
    <div>
        <Nav />
        <div>
        <div className="whishlist-banner-heading">
          <h1> About <span>Us</span> </h1>
        </div>
        <section className="about">
          <div className="image">
            <img src="../../images/about-img.jpg" alt="about-img" />
          </div>
          <div className="content">
            <span>welcome to SARATHI - GROCERIES</span>
            <h3>fresh and organic groceries and cooking related products</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel sequi nostrum quae nobis non quaerat nisi voluptatibus recusandae reprehenderit tempore eligendi, eum quibusdam perferendis dicta, incidunt dolores nemo ex.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem cumque molestiae blanditiis deleniti aspernatur, ab tempora quisquam sapiente commodi hic.</p>
            <a href="#" className="primary-button">read more</a>
          </div>
        </section>
      </div>
        <Footer />
    </div>
  )
}
