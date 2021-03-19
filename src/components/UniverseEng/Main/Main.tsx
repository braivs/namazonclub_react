import React from "react";
import {Home} from "./Home/Home";
import {ContactUs} from "./ContactUs/ContactUs";
import s from "./Main.module.scss";


export function Main() {
  return (
    <main className={s.main}>
      <Home />
      <ContactUs />
    </main>
  )
}