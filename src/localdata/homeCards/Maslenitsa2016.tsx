import React from "react"
import power2016 from 'src/img/main/2016-power competition on Shrove Tuesday.jpg'
import {NavLink} from "react-router-dom"

export const Maslenitsa2016 = () => {
    return (
        <>
            <NavLink to={'/universeeng/temp'}><h3>Female power competitions for the Maslenitsa
                Festival, 2016</h3></NavLink>
                <img src={power2016} alt=""/>
            <p>The female power competition for this year's Maslenitsa Festival took place at the Namazon Club on
                Thursday,
                March 10th. It was held in three nominations: armwrestling, leg-wrestling and pins-and-submissions
                wrestling
                where a wrestler could win a fight by either submission or pin. There were three participants in all who
                competed in the same weight category - up to 60 kg.</p>
            <NavLink to={'/universeeng/temp'}>
                <button type="button">Read more...</button>
            </NavLink>
        </>
    )
}
