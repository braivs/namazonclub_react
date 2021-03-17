import React from "react";
import s from "./MainEng.module.scss"
import {Header} from "./Header/Header";

export function MainEng() {
  return (
    <div className={s.MainEngWrapper}>
      <div className="container">
        <Header />
      </div>
    </div>
  )
}

