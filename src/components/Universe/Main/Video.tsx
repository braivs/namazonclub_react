import React from 'react'
import {Route, Routes} from "react-router-dom"
import {Video44} from "../../../localdata/video/video44"
import {Video42} from "../../../localdata/video/video42"
import {Video41} from "../../../localdata/video/video41"
import {Video37} from "../../../localdata/video/video37"
import {Video36} from "../../../localdata/video/video36"
import sC from 'src/common/styles.module.scss'
import cn from 'classnames'
import {InProgress} from "./inProgress"
import {Video35} from "../../../localdata/video/video35"
import {Video33} from "../../../localdata/video/video33"
import {Video29} from "../../../localdata/video/video29"
import {Video27} from "../../../localdata/video/video27"
import {Video26} from "../../../localdata/video/video26"
import {Video24} from "../../../localdata/video/video24"
import {Video23} from "../../../localdata/video/video23"
import {Video19} from "../../../localdata/video/video19"
import {Video16} from "../../../localdata/video/video16"
import {Video12} from "../../../localdata/video/video12"
import {Video08} from "../../../localdata/video/video08"
import {Video06} from "../../../localdata/video/video06"
import {Video04} from "../../../localdata/video/video04"
import {Video03} from "../../../localdata/video/video03"
import {Video02} from "../../../localdata/video/video02"
import {Video01} from "../../../localdata/video/video01"
import {Video09} from "../../../localdata/video/video09"
import {Video17} from 'src/localdata/video/video17'
import {Video18} from "../../../localdata/video/video18"
import {Video20} from "../../../localdata/video/video20"
import {Video21} from "../../../localdata/video/video21"
import {Video13} from "../../../localdata/video/video13"
import {Video03wm} from "../../../localdata/video/video03wm"
import {Video05} from "../../../localdata/video/video05"
import {Video07} from "../../../localdata/video/video07"
import {Video10} from "../../../localdata/video/video10"
import {Video11} from "../../../localdata/video/video11"
import {Video14} from "../../../localdata/video/video14"
import {Video15} from "../../../localdata/video/video15"
import {Video22} from "../../../localdata/video/video22"
import {Video25} from "../../../localdata/video/video25"
import {Video28} from "../../../localdata/video/video28"
import {Video30} from "../../../localdata/video/video30"
import {Video31_1} from "../../../localdata/video/video31_1"
import {Video31_2} from "../../../localdata/video/video31_2"
import {Video32} from "../../../localdata/video/video32"
import {Video34} from "../../../localdata/video/video34"
import {Video38} from "../../../localdata/video/video38"
import {Video39} from "../../../localdata/video/video39"
import {Video40} from "../../../localdata/video/video40"
import {NC45} from "../../../localdata/video/nc45"
import {NC46} from "../../../localdata/video/nc46"
import {NC47} from "../../../localdata/video/NC47"

export const Video = () => {
    return (
        <div className={cn(sC.compArticlesVideoGirl, sC.videoGirl)}>
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
                <Route path="19" element={<Video19/>}></Route>
                <Route path="16" element={<Video16/>}></Route>
                <Route path="12" element={<Video12/>}></Route>
                <Route path="8" element={<Video08/>}></Route>
                <Route path="6" element={<Video06/>}></Route>
                <Route path="4" element={<Video04/>}></Route>
                <Route path="3" element={<Video03/>}></Route>
                <Route path="2" element={<Video02/>}></Route>
                <Route path="1" element={<Video01/>}></Route>
                {/*MMA*/}
                <Route path="9" element={<Video09/>}></Route>
                <Route path="17" element={<Video17/>}></Route>
                <Route path="18" element={<Video18/>}></Route>
                <Route path="20" element={<Video20/>}></Route>
                <Route path="21" element={<Video21/>}></Route>
                {/*Kickboxing*/}
                <Route path="13" element={<Video13/>}></Route>
                {/*Mixed wrestling*/}
                <Route path="3wm" element={<Video03wm/>}></Route>
                <Route path="5" element={<Video05/>}></Route>
                <Route path="7" element={<Video07/>}></Route>
                <Route path="10" element={<Video10/>}></Route>
                <Route path="11" element={<Video11/>}></Route>
                <Route path="14" element={<Video14/>}></Route>
                <Route path="15" element={<Video15/>}></Route>
                <Route path="22" element={<Video22/>}></Route>
                <Route path="25" element={<Video25/>}></Route>
                <Route path="28" element={<Video28/>}></Route>
                <Route path="30" element={<Video30/>}></Route>
                <Route path="31_1" element={<Video31_1/>}></Route>
                <Route path="31_2" element={<Video31_2/>}></Route>
                <Route path="32" element={<Video32/>}></Route>
                <Route path="34" element={<Video34/>}></Route>
                <Route path="38" element={<Video38/>}></Route>
                <Route path="39" element={<Video39/>}></Route>
                <Route path="40" element={<Video40/>}></Route>
                <Route path="NC45" element={<NC45/>}></Route>
                <Route path="NC46" element={<NC46/>}></Route>
                <Route path="NC47" element={<NC47/>}></Route>

                <Route path={'/*'} element={<InProgress />}></Route>
            </Routes>
        </div>
    )
}