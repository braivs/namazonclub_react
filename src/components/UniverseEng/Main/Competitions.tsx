import React from 'react'
import sC from "../../../common/styles.module.scss"
import {Cards} from "../../../common/Cards/Cards"
import {cardsCompetitions2015_2017} from "../../../localdata/cardsCompetitions"

export const Competitions = () => {
    return (
        <>
            <div className={sC.header}>
                <h3>Results of the past competitions</h3>
                <h3>Subcategories</h3>
            </div>
            <div>
              <p>2015-2017</p>
              <Cards cardsArray={cardsCompetitions2015_2017} variant={'competitions'}/>
            </div>
        </>
    )
}