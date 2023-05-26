import React from "react"
import {Home} from "./Home/Home"
import {ContactUs} from "./ContactUs/ContactUs"
import s from "./Main.module.scss"
import {Route, Routes} from "react-router-dom"
import {NotFound} from "./notFound"
import {Video} from "./Video"
import {Girls} from "./Girls"


export function Main() {
  return (
    <main className={s.main}>
        <Routes>
            <Route path="home" element={<Home/>}/>
            <Route path="contactus" element={<ContactUs/>}/>
            <Route path="video/:cardsVariant" element={<Video/>}/>
            <Route path="girls/:cardsVariant" element={<Girls/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>

    </main>
  )
}