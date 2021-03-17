import s from "./Navigation.module.scss";
import React from "react";

export function Navigation() {
  return (
    <nav className={s.navigation + " navbar navbar-expand-lg"}>
      <a className="navbar-brand" href="homeEng.html"><img src="img/logo.jpg" alt=""/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#snavbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
        className="" role="button"><i className="fa fa-bars" aria-hidden="true"></i></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="homeEng.html">HOME</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="https://gumroad.com/namazonclub">SHOP</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#s" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">VIDEO</a>
            <div className={s.dropdownMenu + " dropdown-menu"} aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#s">All categories</a>
              <a className="dropdown-item" href="#s">Wrestling</a>
              <a className="dropdown-item" href="#s">MMA</a>
              <a className="dropdown-item" href="#s">Kickboxing, Myay Thai</a>
              <a className="dropdown-item" href="#s">Mixed wrestling</a></div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#s" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">GIRLS</a>
            <div className={s.dropdownMenu + " dropdown-menu"} aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#s">All girls</a>
              <a className="dropdown-item" href="#s">2010 - 2011</a>
              <a className="dropdown-item" href="#s">2012 - 2013</a></div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#s" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">COMPETITIONS</a>
            <div className={s.dropdownMenu + " dropdown-menu"} aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#s">All competitions</a>
              <a className="dropdown-item" href="#s">2015 - 2017</a>
              <a className="dropdown-item" href="#s">2013 - 2014</a>
              <a className="dropdown-item" href="#s">2012</a>
              <a className="dropdown-item" href="#s">2011</a>
              <a className="dropdown-item" href="#s">Archive</a></div>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#s">CONTACT US</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}