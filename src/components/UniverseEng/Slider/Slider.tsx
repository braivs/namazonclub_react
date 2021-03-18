import s from "./Slider.module.scss";
import React from "react";

export function Slider() {
  return (
    <div className={s.slider}>
      <div className="carousel slide carousel-fade" id="carouselExampleIndicators" data-ride="carousel"
           data-interval="8000">
        <ol className="carousel-indicators">
          <li className="active" data-target="#carouselExampleIndicators" data-slide-to="0"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active"><img className="d-block w-100" src="img/sliderEng/slide1.jpg"
                                                     alt="..."/></div>
          <div className="carousel-item"><img className="d-block w-100" src="img/sliderEng/slide2.jpg" alt="..."/>
          </div>
          <div className="carousel-item"><img className="d-block w-100" src="img/sliderEng/slide3.jpg" alt="..."/>
          </div>
          <div className="carousel-item"><img className="d-block w-100" src="img/sliderEng/slide4.jpg" alt="..."/>
          </div>
          <div className="carousel-item"><img className="d-block w-100" src="img/sliderEng/slide5.jpg" alt="..."/>
          </div>
          <div className="carousel-item"><img className="d-block w-100" src="img/sliderEng/slide6.jpg" alt="..."/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span
          className="carousel-control-prev-icon" aria-hidden="true"></span><span className="sr-only">Previous</span></a><a
        className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span
        className="carousel-control-next-icon" aria-hidden="true"></span><span className="sr-only">Next</span></a>
      </div>
    </div>


  )
}