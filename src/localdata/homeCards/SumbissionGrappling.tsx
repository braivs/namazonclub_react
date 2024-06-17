import React from "react"
import sg from 'src/img/main/sg.jpg'
import {NavLink} from "react-router-dom"

export function SumbissionGrappling() {
  return (
    <>
      <NavLink to={'/universe/articles/submission'}>
        <h3>Submission Grappling (Wrestling) as Single Combat</h3>
      </NavLink>
      <img src={sg} alt=""/>
      <p><b>Submission grappling</b> (Submission wrestling) is a non-striking hybrid style formed from wrestling, jiu
        jitsu, sambo, and many other submission fighting styles. It consists of applying submission holds and choking
        techniques to make the opponent abandon the fight. Submission grappling plays an important role in the practice
        of <b>Mixed Martial Arts (MMA)</b> and is considered an effective form of <b>self-defense</b>.</p>
      <NavLink to={'/universe/articles/submission'}>
        <button type="button">Read more...</button>
      </NavLink>

    </>
  )
}