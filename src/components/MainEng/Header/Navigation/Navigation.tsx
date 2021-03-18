import s from "./Navigation.module.scss";
import React from "react";

export function Navigation() {
  return (
    <nav className={s.navigation + " navbar navbar-expand-lg"}>
      <a className="navbar-brand" href="http://">
        <img src="img/logo.jpg" alt=""/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className={s.togglerIcon}>&#9776;</span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="http://">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://gumroad.com/namazonclub">SHOP</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://" id="navbarDropdown" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              VIDEO
            </a>
            <div className={s.dropdownMenu + " dropdown-menu"} aria-labelledby="navbarDropdown">
              <a className={s.dropdownItem + " dropdown-item"} href="http://">All categories</a>
              <a className={s.dropdownItem + " dropdown-item"} href="http://">Wrestling</a>
              <a className={s.dropdownItem + " dropdown-item"} href="http://">MMA</a>
              <a className={s.dropdownItem + " dropdown-item"} href="http://">Kickboxing, Myay Thai</a>
              <a className={s.dropdownItem + " dropdown-item"} href="http://">Mixed wrestling</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://" id="navbarDropdown" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              GIRLS
            </a>
            <div className={s.dropdownMenu + " dropdown-menu"} aria-labelledby="navbarDropdown">
              <a className={s.dropdownItem + " dropdown-item"} href="http://">All girls</a>
              <a className={s.dropdownItem + " dropdown-item"} href="http://">2010 - 2011</a>
              <a className={s.dropdownItem + " dropdown-item"} href="http://">2012 - 2013</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://" id="navbarDropdown" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              COMPETITIONS
            </a>
            <div className={s.dropdownMenu + " dropdown-menu"} aria-labelledby="navbarDropdown">
              <a className={s.dropdownItem + " dropdown-item"} href="http://">All competitions</a>
              <a className={s.dropdownItem + " dropdown-item"} href="http://">2015 - 2017</a>
              <a className={s.dropdownItem + " dropdown-item"} href="http://">2013 - 2014</a>
              <a className={s.dropdownItem + " dropdown-item"} href="http://">2012</a>
              <a className={s.dropdownItem + " dropdown-item"} href="http://">2011</a>
              <a className={s.dropdownItem + " dropdown-item"} href="http://">Archive</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://">CONTACT US</a>
          </li>
        </ul>
      </div>

    </nav>
  )
}