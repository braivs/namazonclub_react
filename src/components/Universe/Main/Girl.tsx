import React from 'react'
import {useParams} from "react-router-dom"

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
    <div>
      <h3>Participants of competitions {yearsConverter(years)}</h3>
    </div>
  )
}