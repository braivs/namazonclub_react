import React from "react"
import mw from 'src/img/main/mw.jpg'
import {NavLink} from "react-router-dom"

export function Mixwrestling() {
  return (
    <>
      <NavLink to={'/universe/articles/mix'}>
        <h3>Mixed Wrestling (Mixwrestling)</h3>
      </NavLink>
      <img src={mw} alt=""/>
      <p>
        Our fighting club is attended by both girls and young men. For the girls, it’s more comfortable to practice many
        wrestling techniques with male partners (we are grateful to the men for their assistance!). Sporting mixed
        wrestling is also practiced with us. In this case, the competitors for the fights are selected based on their
        weight categories and physical strength.
      </p>
      <NavLink to={'/universe/articles/mix'}>
        <button type="button">Read more...</button>
      </NavLink>

    </>
  )
}