import React from 'react'
import {Route, Routes} from "react-router-dom"
import {NC44} from "../../../localdata/video/NC44"
import {NC42} from "../../../localdata/video/NC42"
import {NC41} from "../../../localdata/video/NC41"
import {NC37} from "../../../localdata/video/NC37"
import {NC36} from "../../../localdata/video/NC36"
import sC from 'src/common/styles.module.scss'
import cn from 'classnames'
import {InProgress} from "./inProgress"
import {NC35} from "../../../localdata/video/NC35"
import {NC33} from "../../../localdata/video/NC33"
import {NC29} from "../../../localdata/video/NC29"
import {NC27} from "../../../localdata/video/NC27"
import {NC26} from "../../../localdata/video/NC26"
import {NC24} from "../../../localdata/video/NC24"
import {NC23} from "../../../localdata/video/NC23"
import {NC19} from "../../../localdata/video/NC19"
import {NC16} from "../../../localdata/video/NC16"
import {NC12} from "../../../localdata/video/NC12"
import {NC08} from "../../../localdata/video/NC08"
import {NC06} from "../../../localdata/video/NC06"
import {NC04} from "../../../localdata/video/NC04"
import {NC03} from "../../../localdata/video/NC03"
import {NC02} from "../../../localdata/video/NC02"
import {NC01} from "../../../localdata/video/NC01"
import {NC09} from "../../../localdata/video/NC09"
import {NC17} from 'src/localdata/video/NC17'
import {NC18} from "../../../localdata/video/NC18"
import {NC20} from "../../../localdata/video/NC20"
import {NC21} from "../../../localdata/video/NC21"
import {NC13} from "../../../localdata/video/NC13"
import {NC03wm} from "../../../localdata/video/NC03wm"
import {NC05} from "../../../localdata/video/NC05"
import {NC07} from "../../../localdata/video/NC07"
import {NC10} from "../../../localdata/video/NC10"
import {NC11} from "../../../localdata/video/NC11"
import {NC14} from "../../../localdata/video/NC14"
import {NC15} from "../../../localdata/video/NC15"
import {NC22} from "../../../localdata/video/NC22"
import {NC25} from "../../../localdata/video/NC25"
import {NC28} from "../../../localdata/video/NC28"
import {NC30} from "../../../localdata/video/NC30"
import {NC31_1} from "../../../localdata/video/NC31_1"
import {NC31_2} from "../../../localdata/video/NC31_2"
import {NC32} from "../../../localdata/video/NC32"
import {NC34} from "../../../localdata/video/NC34"
import {NC38} from "../../../localdata/video/NC38"
import {NC39} from "../../../localdata/video/NC39"
import {NC40} from "../../../localdata/video/NC40"
import {NC45} from "../../../localdata/video/NC45"
import {NC46} from "../../../localdata/video/NC46"
import {NC47} from "../../../localdata/video/NC47"
import {NC48} from "../../../localdata/video/NC48"
import {NC49} from "../../../localdata/video/NC49"
import {NC50} from "../../../localdata/video/NC50"
import {NC51} from "../../../localdata/video/NC51"

export const Video = () => {
    return (
        <div className={cn(sC.compArticlesVideoGirl, sC.videoGirl)}>
            <Routes>
                {/*Wrestling*/}
                <Route path="NC44" element={<NC44/>}></Route>
                <Route path="NC42" element={<NC42/>}></Route>
                <Route path="NC41" element={<NC41/>}></Route>
                <Route path="NC37" element={<NC37/>}></Route>
                <Route path="NC36" element={<NC36/>}></Route>
                <Route path="NC36" element={<NC36/>}></Route>
                <Route path="NC35" element={<NC35/>}></Route>
                <Route path="NC33" element={<NC33/>}></Route>
                <Route path="NC29" element={<NC29/>}></Route>
                <Route path="NC27" element={<NC27/>}></Route>
                <Route path="NC26" element={<NC26/>}></Route>
                <Route path="NC24" element={<NC24/>}></Route>
                <Route path="NC23" element={<NC23/>}></Route>
                <Route path="NC19" element={<NC19/>}></Route>
                <Route path="NC16" element={<NC16/>}></Route>
                <Route path="NC12" element={<NC12/>}></Route>
                <Route path="NC08" element={<NC08/>}></Route>
                <Route path="NC06" element={<NC06/>}></Route>
                <Route path="NC04" element={<NC04/>}></Route>
                <Route path="NC03" element={<NC03/>}></Route>
                <Route path="NC02" element={<NC02/>}></Route>
                <Route path="NC01" element={<NC01/>}></Route>
                {/*MMA*/}
                <Route path="NC09" element={<NC09/>}></Route>
                <Route path="NC17" element={<NC17/>}></Route>
                <Route path="NC18" element={<NC18/>}></Route>
                <Route path="NC20" element={<NC20/>}></Route>
                <Route path="NC21" element={<NC21/>}></Route>
                {/*Kickboxing*/}
                <Route path="13" element={<NC13/>}></Route>
                {/*Mixed wrestling*/}
                <Route path="NC03wm" element={<NC03wm/>}></Route>
                <Route path="NC05" element={<NC05/>}></Route>
                <Route path="NC07" element={<NC07/>}></Route>
                <Route path="NC10" element={<NC10/>}></Route>
                <Route path="NC11" element={<NC11/>}></Route>
                <Route path="NC14" element={<NC14/>}></Route>
                <Route path="NC15" element={<NC15/>}></Route>
                <Route path="NC22" element={<NC22/>}></Route>
                <Route path="NC25" element={<NC25/>}></Route>
                <Route path="NC28" element={<NC28/>}></Route>
                <Route path="NC30" element={<NC30/>}></Route>
                <Route path="NC31_1" element={<NC31_1/>}></Route>
                <Route path="NC31_2" element={<NC31_2/>}></Route>
                <Route path="NC32" element={<NC32/>}></Route>
                <Route path="NC34" element={<NC34/>}></Route>
                <Route path="NC38" element={<NC38/>}></Route>
                <Route path="NC39" element={<NC39/>}></Route>
                <Route path="NC40" element={<NC40/>}></Route>
                <Route path="NC45" element={<NC45/>}></Route>
                <Route path="NC46" element={<NC46/>}></Route>
                <Route path="NC47" element={<NC47/>}></Route>
                <Route path="NC48" element={<NC48/>}></Route>
                <Route path="NC49" element={<NC49/>}></Route>
                <Route path="NC50" element={<NC50/>}></Route>
                <Route path="NC51" element={<NC51/>}></Route>
                <Route path={'/*'} element={<InProgress />}></Route>
            </Routes>
        </div>
    )
}