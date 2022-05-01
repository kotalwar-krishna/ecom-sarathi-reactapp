import React from 'react'
import { useState } from 'react'
import './nav.css'
import { Link } from "react-router-dom";

function Nav() {

  const [classSearchForm, setClassSearchForm] = useState('search-form')
  const [classLoginForm, setClassLoginForm] = useState('login-form')

  const checkSearchClass = () =>{
    if(classSearchForm == 'search-form'){
      setClassSearchForm('search-form-active')
    }else{
      setClassSearchForm('search-form')
    }
  }

  const checkClassOfLoginForm = () =>{
    if(classLoginForm == 'login-form'){
      setClassLoginForm('login-form-active')
    }else{
      setClassLoginForm('login-form')
    }
  }

  return (
    <div>

<header className="comp-header">
        <a href="#" className="nav-logo"> <i className="fas fa-shopping-basket" /> Sarathi Grocery</a>
        <navbar className="navbar-comp">
          <Link to="/">home</Link>
          <a href="#features">features</a>
          <a href="./product.html">products</a>
          <Link to="/about">about</Link>
          <Link to= '/review'>review</Link>
          {/* <a href="./review.html">review</a> */}
        </navbar>
        <div className="nav-icons">
          <div className="fas fa-bars" id="menu-btn" />
          <div onClick={checkSearchClass} className="fas fa-search" id="search-btn" />
          <a href="./whishlist.html"><div className="fas fa-heart" id="whishlist-btn" /></a>
          <a href="./cart.html"><div className="fas fa-shopping-cart" id="cart-btn" /></a>
          <div onClick={checkClassOfLoginForm} className="fas fa-user" id="login-btn" />
        </div>
        <form className={classSearchForm}>
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box" className="fas fa-search" />
        </form>
        <form  className={classLoginForm}>
          <h3>login now</h3>
          <input type="email" placeholder="your email" className="box" />
          <input type="password" placeholder="your password" className="box" />
          <p>forget your password <a href="#">click here</a></p>
          <p>don't have an account <a href="./sign-up.html">Sign Up</a></p>
          <input type="submit" defaultValue="login now" className="primary-button" />
        </form>
      </header>

    </div>
  )
}

export { Nav }
