import React from 'react'
import sC from "../../../common/styles.module.scss"
import {Cards} from "../../../common/Cards/Cards"
import {cardsGirls2010_2011, cardsGirls2012_2013} from "../../../localdata/cardsGirls"
import {useParams} from "react-router-dom"

export const Girls = () => {
    const {cardsVariant} = useParams()

    return (
        <>
            <div className={sC.header}>
                <h3>Participants of competitions</h3>
                <h3>Subcategories</h3>
            </div>
            {(cardsVariant === 'all' || cardsVariant === '2012-2013') && <div>
              <p>2012 - 2013</p>
              <Cards cardsArray={cardsGirls2012_2013} variant={"girl"}/>
            </div> }
            {(cardsVariant === 'all' || cardsVariant === '2010-2011') && <div>
                <p>2010-2011</p>
                <Cards cardsArray={cardsGirls2010_2011} variant={"girl"}/>
            </div>  }
        </>
    )
}