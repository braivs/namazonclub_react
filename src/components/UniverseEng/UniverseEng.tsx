import React from "react";
import s from "./UniverseEng.module.scss"
import {Header} from "./Header/Header";
import {Slider} from "./Slider/Slider";
import {Main} from "./Main/Main";
import {Footer} from "./Footer/Footer";

export function UniverseEng() {
  return (
    <div className={s.MainEngWrapper}>
      <div className="container">
        <Header />
        <Slider />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

