import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import Category from '../pages/Category';
import Details from '../pages/Details';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#'>Shop</a>


              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:cid" element={<Category />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  )
}
