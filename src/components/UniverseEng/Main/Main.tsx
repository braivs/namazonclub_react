import React from "react"
import {Home} from "./Home/Home"
import {ContactUs} from "./ContactUs/ContactUs"
import s from "./Main.module.scss"
import {Route, Routes} from "react-router-dom"
import {NotFound} from "./notFound"


export function Main() {
  return (
    <main className={s.main}>
        <Routes>
            <Route path="home" element={<Home/>}/>
            <Route path="contactus" element={<ContactUs/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>

    </main>
  )
}