import React from "react"
import {Home} from "./Home/Home"
import {ContactUs} from "./ContactUs/ContactUs"
import s from "./Main.module.scss"
import {Route, Routes} from "react-router-dom"
import {NotFound} from "./notFound"
import {Video} from "./Video"
import {Girls} from "./Girls"
import {Competitions} from "./Competitions"
import {Articles} from "./Articles"
import {CompArticles} from "./CompArticles"
import {Video44} from "../../../localdata/videos/video44"
import {Video42} from "../../../localdata/videos/video42"
import {Video41} from "../../../localdata/videos/video41"
import {Video37} from "../../../localdata/videos/video37"
import {Video36} from "../../../localdata/videos/video36"


export function Main() {
  return (
    <main className={s.main}>
        <Routes>
            <Route path="home" element={<Home/>}/>
            <Route path="contactus" element={<ContactUs/>}/>
            <Route path="video/:cardsVariant" element={<Video/>}/>
            <Route path="girls/:cardsVariant" element={<Girls/>}/>
            <Route path="competitions/:cardsVariant" element={<Competitions/>}/>
            <Route path='articles/:article' element={<Articles/>}/>
            <Route path='compArticles/:years/:compArticle' element={<CompArticles/>}/>
            <Route path='videos/44' element={<Video44/>}></Route>
            <Route path='videos/42' element={<Video42/>}></Route>
            <Route path='videos/41' element={<Video41/>}></Route>
            <Route path='videos/37' element={<Video37/>}></Route>
            <Route path='videos/36' element={<Video36/>}></Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>

    </main>
  )
}