import React from 'react'
import sC from "../../../common/styles.module.scss"
import {Cards} from "../../../common/Cards/Cards"
import {
    cardsArchive,
    cardsCompetitions2011,
    cardsCompetitions2012,
    cardsCompetitions2013_2014,
    cardsCompetitions2015_2017
} from "../../../localdata/cardsCompetitions"
import {useParams} from "react-router-dom"

export const Competitions = () => {
    const {cardsVariant} = useParams()

    return (
        <>
            <div className={sC.header}>
                <h3>Results of the past competitions</h3>
                <h3>Subcategories</h3>
            </div>
            {(cardsVariant === 'all' || cardsVariant === '2015-2017') && <div>
              <p>2015-2017</p>
              <Cards cardsArray={cardsCompetitions2015_2017} variant={'competitions'}/>
            </div> }
            {(cardsVariant === 'all' || cardsVariant === '2013-2014') && <div>
                <p>2013-2014</p>
                <Cards cardsArray={cardsCompetitions2013_2014} variant={'competitions'}/>
            </div> }
            {(cardsVariant === 'all' || cardsVariant === '2012') && <div>
                <p>2012</p>
                <Cards cardsArray={cardsCompetitions2012} variant={'competitions'}/>
            </div> }
            {(cardsVariant === 'all' || cardsVariant === '2011') && <div>
                <p>2011</p>
                <Cards cardsArray={cardsCompetitions2011} variant={'competitions'}/>
            </div>}
            {(cardsVariant === 'all' || cardsVariant === 'Archive') && <div>
                <p>Archive</p>
                <Cards cardsArray={cardsArchive} variant={'competitions'}/>
            </div> }
        </>
    )
}