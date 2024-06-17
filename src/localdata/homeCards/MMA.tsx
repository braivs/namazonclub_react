import React from "react"
import mma from 'src/img/main/mma.jpg'
import {NavLink} from "react-router-dom"

export function MMA() {
  return (
    <>
      <NavLink to={'/universe/articles/mma'}>
        <h3>MMA (Mixed Martial Arts)</h3>
      </NavLink>
      <img src={mma} alt=""/>
      <p><b>MMA</b> (Mixed Martial Arts) is a full-contact combat sport that allows the use of both striking and
        grappling arts while both standing and on the ground, including wrestling, Brazilian jiu-jitsu, sambo, judo,
        boxing, kickboxing, Muay Thai, karate, and other styles. The roots of modern mixed martial arts can be traced
        back to the ancient Olympic combat sport of Pankration.</p>
      <NavLink to={'/universe/articles/mma'}>
        <button type="button">Read more...</button>
      </NavLink>
    </>
  )
}