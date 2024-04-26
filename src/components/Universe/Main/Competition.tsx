import {Route, Routes, useParams} from "react-router-dom"
import sC from 'src/common/styles.module.scss'
import {yearsConverter} from "../../../common/helpers"
import React from "react"
import {Maslenitsa2016} from "../../../localdata/competition/2015-2017/Maslenitsa2016"
import {Tournament2013Main} from "../../../localdata/competition/2013-2014/Tournament2013/Tournament2013Main"
import {Tournament2014} from "../../../localdata/competition/2013-2014/Tournament2014"

export const Competition = () => {
    const {years} = useParams()

    return (
        <div className={sC.compArticlesVideoGirl}>
           <h3>{yearsConverter(years)}</h3>
            <Routes>
                <Route path="maslenitsa-2016" element={<Maslenitsa2016/>}></Route>
                <Route path='tournament-2013' element={<Tournament2013Main/>}></Route>
                <Route path='tournament-2014' element={<Tournament2014/>}></Route>
            </Routes>
        </div>
    )
}