import {Route, Routes, useParams} from "react-router-dom"
import sC from 'src/common/styles.module.scss'
import {yearsConverter} from "../../../common/helpers"
import React from "react"
import {Maslenitsa2016} from "../../../localdata/competition/2015-2017/Maslenitsa2016"
import {Tournament2013Main} from "../../../localdata/competition/2013-2014/Tournament2013/Tournament2013Main"
import {Tournament2014} from "../../../localdata/competition/2013-2014/Tournament2014"
import {Grappling2014} from "../../../localdata/competition/2013-2014/Grappling2014"
import {InProgress} from "./inProgress"
import {Christmas2012} from "../../../localdata/competition/2012/Christmas2012"
import {MMA2012} from "../../../localdata/competition/2012/MMA2012"
import {SportHoliday2012} from "../../../localdata/competition/2012/SportHoliday2012"
import {VarvaraTais2012} from "../../../localdata/competition/2012/VarvaraTais2012"
import {NevskayaArena2012} from "../../../localdata/competition/2012/NevskayaArena2012"
import {Christmas2011} from "../../../localdata/competition/2011/Christmas2011"
import {Beach2011} from "../../../localdata/competition/2011/Beach2011"
import {BeachMix2011} from "../../../localdata/competition/2011/BeachMix2011"
import {IzidaVsTais2008} from "../../../localdata/competition/Archive/IzidaVsTais2008"

export const Competition = () => {
    const {years} = useParams()

    return (
        <div className={sC.compArticlesVideoGirl}>
           <h3>{yearsConverter(years)}</h3>
            <Routes>
                //2015-2017
                <Route path="maslenitsa-2016" element={<Maslenitsa2016/>}></Route>
                //2013-2014
                <Route path='tournament-2013' element={<Tournament2013Main/>}></Route>
                <Route path='tournament-2014' element={<Tournament2014/>}></Route>
                <Route path='grappling-2014' element={<Grappling2014/>}></Route>
                //2012
                <Route path='christmas-2012' element={<Christmas2012/>}></Route>
                <Route path='mma-2012' element={<MMA2012/>}></Route>
                <Route path='sportHoliday-2012' element={<SportHoliday2012/>}></Route>
                <Route path='varvara-tais-2012' element={<VarvaraTais2012/>}></Route>
                <Route path='nevskaya-arena-2012' element={<NevskayaArena2012/>}></Route>
                //2011
                <Route path='christmas-2011' element={<Christmas2011/>}></Route>
                <Route path='beach-2011' element={<Beach2011/>}></Route>
                <Route path='beach-mix-2011' element={<BeachMix2011/>}></Route>
                <Route path='IzidaVsTais2008' element={<IzidaVsTais2008/>}></Route>
                <Route path={'/*'} element={<InProgress />}></Route>
            </Routes>
        </div>
    )
}