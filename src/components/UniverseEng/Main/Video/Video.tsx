import React from 'react'
import s from './Video.module.scss'
import {Cards} from "./Cards/Cards"
import {cardsBoxing, cardsMix, cardsMMA, cardsWrestling} from "../../../../localdata/cardsVideo"

export const Video = () => {
    return (
        <>
            <div className={s.video}>
                <h3>Videos of the competitions and individual fights at the Namazon Club</h3>
                <h3>Subcategories</h3>
                <p>Wrestling</p>
                <p>This subcategory includes only videos of woman-on-woman wrestling matches that are mostly carried out
                    according to the rules of SUBMISSION GRAPPLING</p>
                <Cards cardsArray={cardsWrestling}/>
            </div>
            <div>
                <p>MMA</p>
                <p>This subcategory is exclusive for the videos of FEMALE MMA FIGHTS, both in a gym and outdoors.</p>
                <Cards cardsArray={cardsMMA}/>
            </div>
            <div>
                <p>Kickboxing, Muay Thai</p>
                <p>This subcategory is for the videos containing female <b>MUAY THAI</b> and <b>KICKBOXING</b> fights, both in a gym and outdoors.</p>
                <Cards cardsArray={cardsBoxing}/>
            </div>
            <div>
                <p>Mixed Wrestling</p>
                <p>Namazon’s man-on-woman wrestling matches are all highly competitive and carried out according to the rules of SUBMISSION GRAPPLING, with no time limit in any individual fight.</p>
                <Cards cardsArray={cardsMix}/>
            </div>
        </>

    )
}