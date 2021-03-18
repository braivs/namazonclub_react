import s from "./Logo.module.scss";
import React from "react";

export function Logo() {
  return (
    <div className={s.logo}>
      <div className={s.row}>
        <div className="col-12">
          <h1>Namazon</h1>
          <h2>Club of single combats for women</h2>
        </div>
      </div>
    </div>
  )
}