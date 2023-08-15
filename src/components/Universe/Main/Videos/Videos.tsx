import React from 'react'
import {Route, Routes} from "react-router-dom"
import {Video44} from "../../../../localdata/videos/video44"
import {Video42} from "../../../../localdata/videos/video42"
import {Video41} from "../../../../localdata/videos/video41"
import {Video37} from "../../../../localdata/videos/video37"
import {Video36} from "../../../../localdata/videos/video36"
import sC from 'src/common/styles.module.scss'
import s from './Videos.module.scss'
import cn from 'classnames'
import {NotFound} from "../notFound"
import {Video35} from "../../../../localdata/videos/video35"
import {Video33} from "../../../../localdata/videos/video33"
import {Video29} from "../../../../localdata/videos/video29"
import {Video27} from "../../../../localdata/videos/video27"
import {Video26} from "../../../../localdata/videos/video26"
import {Video24} from "../../../../localdata/videos/video24"
import {Video23} from "../../../../localdata/videos/video23"

export const Videos = () => {
    return (
        <div className={cn(sC.compArticlesVideos, s.videos)}>
            <Routes>
                {/*Wrestling*/}
                <Route path="44" element={<Video44/>}></Route>
                <Route path="42" element={<Video42/>}></Route>
                <Route path="41" element={<Video41/>}></Route>
                <Route path="37" element={<Video37/>}></Route>
                <Route path="36" element={<Video36/>}></Route>
                <Route path="36" element={<Video36/>}></Route>
                <Route path="35" element={<Video35/>}></Route>
                <Route path="33" element={<Video33/>}></Route>
                <Route path="29" element={<Video29/>}></Route>
                <Route path="27" element={<Video27/>}></Route>
                <Route path="26" element={<Video26/>}></Route>
                <Route path="24" element={<Video24/>}></Route>
                <Route path="23" element={<Video23/>}></Route>
                <Route path={'/*'} element={<NotFound />}></Route>
            </Routes>
        </div>
    )
}