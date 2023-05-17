import React from "react";
import mma from 'src/img/main/mma.jpg'

export function MMA() {
  return (
    <>
      <h3><a href="articles/mmaEng.html">MMA (Mixed Martial Arts)</a></h3>
      <img src={mma} alt=""/>
      <p><b>MMA</b> ((Mixed Martial Arts) is a full contact com-bat sport that allows the use of both striking and
        grappling arts while both standing and on the ground, including wrestling, Brazilian jiu-jitsu, sambo, judo,
        boxing, kickboxing, Muay Thai, karate and other styles. The roots of mo-dern mixed martial arts can be traced
        back to the ancient Olympic combat sport of Pankration. </p>
      <button type="button">Read more...</button>
    </>
  );
}