import s from "./Navigation.module.scss";
import React from "react";

export function Navigation() {
  return (
    <nav className={s.navigation + " navbar navbar-expand-lg"}>
      <a className="navbar-brand" href="homeEng.html"><img src="img/logo.jpg" alt=""/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
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
            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">VIDEO</a>
            <div className={s.dropdownMenu + " dropdown-menu"} aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="videoAllEng.html">All categories</a>
              <a className="dropdown-item" href="videoWrestlingEng.html">Wrestling</a>
              <a className="dropdown-item" href="videoMMAEng.html">MMA</a>
              <a className="dropdown-item" href="videoBoxingEng.html">Kickboxing, Myay Thai</a>
              <a className="dropdown-item" href="videoMixEng.html">Mixed wrestling</a></div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">GIRLS</a>
            <div className={s.dropdownMenu + " dropdown-menu"} aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="girls/girlsAllEng.html">All girls</a>
              <a className="dropdown-item" href="girls/girls2010-2011Eng.html">2010 - 2011</a>
              <a className="dropdown-item" href="girls/girls2012-2013Eng.html">2012 - 2013</a></div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">COMPETITIONS</a>
            <div className={s.dropdownMenu + " dropdown-menu"} aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="competitions/competitionsAllEng.html">All competitions</a>
              <a className="dropdown-item" href="competitions/competitions2015-2017Eng.html">2015 - 2017</a>
              <a className="dropdown-item" href="competitions/competitions2013-2014Eng.html">2013 - 2014</a>
              <a className="dropdown-item" href="competitions/competitions2012Eng.html">2012</a>
              <a className="dropdown-item" href="competitions/competitions2011Eng.html">2011</a>
              <a className="dropdown-item" href="competitions/competitionsArchiveEng.html">Archive</a></div>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="contactUsEng.html">CONTACT US</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}