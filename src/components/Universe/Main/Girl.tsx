import React from 'react'
import {useParams} from "react-router-dom"

export const Girl = () => {
  const {cardsVariant} = useParams()
  console.log('cardsVariant')
  console.log(cardsVariant)

  return (
    <div>
      
    </div>
  )
}