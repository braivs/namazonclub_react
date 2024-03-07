import React from 'react'
import {Route, Routes, useParams} from "react-router-dom"
import sC from 'src/common/styles.module.scss'
import {Tais2013} from "../../../localdata/girl/Tais2013"
import cn from 'classnames'
import {KaraTeller} from "../../../localdata/girl/kara_teller"
import {InProgress} from "./inProgress"
import {ElenaVasileva2013} from "../../../localdata/girl/Elena_Vasileva2013"
import {DaryaBalina} from "../../../localdata/girl/DaryaBalina"
import {MariyaRyljova} from "../../../localdata/girl/MariyaRyljova"

export const Girl = () => {
  const {years} = useParams()

  const yearsConverter = (years: string | undefined) => {
    switch (years) {
      case "2010_2011": return '2010 - 2011'
      case '2012_2013': return '2012 - 2013'
      default: return undefined
    }
  }

  return (
    <div className={cn(sC.compArticlesVideoGirl, sC.videoGirl)}>
      <h3>Participants of competitions {yearsConverter(years)}</h3>
      <Routes>
        <Route path="tais2012-2013" element={<Tais2013/>}></Route>
        <Route path="kara-teller" element={<KaraTeller/>}></Route>
        <Route path="darya-balina" element={<DaryaBalina/>}></Route>
        <Route path="mariya-ryljova" element={<MariyaRyljova/>}></Route>
        <Route path="tais2011" element={<InProgress/>}></Route>
        <Route path="irina" element={<InProgress/>}></Route>
        <Route path="valentina-perfileva" element={<InProgress/>}></Route>
        <Route path="irina-vlasta" element={<InProgress/>}></Route>
        <Route path="nadezhda-akhmerova" element={<InProgress/>}></Route>
        <Route path="elena-vasileva2013" element={<ElenaVasileva2013/>}></Route>
        <Route path="natalia-mysik" element={<InProgress/>}></Route>
        <Route path="kseniya-voloshina" element={<InProgress/>}></Route>
      </Routes>
    </div>
  )
}