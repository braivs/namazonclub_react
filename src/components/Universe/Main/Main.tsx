import React from "react"
import {Home} from "./Home/Home"
import {ContactUs} from "./ContactUs/ContactUs"
import s from "./Main.module.scss"
import {Route, Routes} from "react-router-dom"
import {InProgress} from "./inProgress"
import {Videos} from "./Videos"
import {Girls} from "./Girls"
import {Competitions} from "./Competitions"
import {Articles} from "./Articles"
import {CompArticles} from "./CompArticles"
import {Video} from "./Video"
import {Girl} from "./Girl"

export function Main() {
  return (
    <main className={s.main}>
        <Routes>
            <Route path="home" element={<Home/>}/>
            <Route path="contactus" element={<ContactUs/>}/>
            <Route path="videos/:cardsVariant" element={<Videos/>}/>
            <Route path="girls/:cardsVariant" element={<Girls/>}/>
            <Route path="competitions/:cardsVariant" element={<Competitions/>}/>
            <Route path='articles/:article' element={<Articles/>}/>
            <Route path='compArticles/:years/:compArticle' element={<CompArticles/>}/>
            <Route path={'video/*'} element={<Video/>}/>
            <Route path={'girl/:years/*'} element={<Girl/>}/>
            <Route path="*" element={<InProgress/>}/>
        </Routes>

    </main>
  )
}