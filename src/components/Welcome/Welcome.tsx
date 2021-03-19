import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Welcome.module.scss"

export function Welcome() {
  return (
    <div className={s.welcome}>
      <div className="container-fluid">
        <div className="carousel slide carousel-fade" id="carouselExampleIndicators" data-ride="carousel"
             data-interval="2000">
          <div className={s.carouselInner + " carousel-inner"}>
            <div className="carousel-item active"><img className="d-block" src="img/sliderIndex/01.jpg" alt="..."/>
            </div>
            <div className="carousel-item"><img className="d-block" src="img/sliderIndex/02.jpg" alt="..."/></div>
            <div className="carousel-item"><img className="d-block" src="img/sliderIndex/03.jpg" alt="..."/></div>
            <div className="carousel-item"><img className="d-block" src="img/sliderIndex/04.jpg" alt="..."/></div>
            <div className="carousel-item"><img className="d-block" src="img/sliderIndex/01.jpg" alt="..."/></div>
            <div className="carousel-item"><img className="d-block" src="img/sliderIndex/05.jpg" alt="..."/></div>
            <div className="carousel-item"><img className="d-block" src="img/sliderIndex/03.jpg" alt="..."/></div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12">
            <button className="btn btn-primary btn-lg" type="button">Вход</button>
            <NavLink to="/universeeng" activeClassName={s.activeLink} className={s.myBtn}>
              <button className="btn btn-primary btn-lg" type="button">Enter</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}