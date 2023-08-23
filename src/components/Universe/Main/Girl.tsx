import React from 'react'
import {Route, Routes, useParams} from "react-router-dom"
import sC from 'src/common/styles.module.scss'
import {Tais2013} from "../../../localdata/girl/Tais2013"
import cn from 'classnames'

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
      </Routes>
    </div>
  )
}