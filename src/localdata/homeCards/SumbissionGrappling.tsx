import React from "react";
import sg from 'src/img/main/sg.jpg'

export function SumbissionGrappling() {
  return (
    <>
      <h3><a href="articles/submissionEng.html">Submission Grappling (Wrestling) as Single Combat</a>
      </h3><img src={sg} alt=""/>
      <p><b>Submission grappling</b> (Submission wrestling) is a non-striking hybrid style formed of wrestling, jiu
        jitsu, sambo, and many other submission fighting styles which consists in applying submission holds and choking
        tech-niques in order to make the opponent aban-don the fight. Submission grappling plays an important role in
        the practice of <b>Mixed Martial Arts (MMA)</b> and is considered an effective form of <b>self-defense</b>.
      </p>
      <button type="button">Read more...</button>
    </>
  );
}