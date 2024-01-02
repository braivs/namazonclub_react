import React from 'react'
import sC from 'src/common/styles.module.scss'
import {Cards} from "../../../common/Cards/Cards"
import {cardsBoxing, cardsMix, cardsMMA, cardsWrestling} from "../../../localdata/cardsVideo"
import {useParams} from "react-router-dom";

export const Videos = () => {
    const {cardsVariant} = useParams()

    return (
        <>
            <div className={sC.header}>
                <h3>Videos of the competitions and individual fights at the Namazon Club</h3>
                <h3>Subcategories</h3>
            </div>
            {(cardsVariant === 'all' || cardsVariant === 'wrestling') && <div>
                <p>Wrestling</p>
                <p>This subcategory includes only videos of woman-on-woman wrestling matches that are mostly carried out
                    according to the rules of SUBMISSION GRAPPLING</p>
                <Cards cardsArray={cardsWrestling} variant={'video'}/>
            </div> }
            {(cardsVariant === 'all' || cardsVariant === 'mma') && <div>
                <p>MMA</p>
                <p>This subcategory is exclusive for the videos of FEMALE MMA FIGHTS, both in a gym and outdoors.</p>
                <Cards cardsArray={cardsMMA} variant={'video'} isReversed={true}/>
            </div>}
            {(cardsVariant === 'all' || cardsVariant === 'boxing') && <div>
                <p>Kickboxing, Muay Thai</p>
                <p>This subcategory is for the videos containing female <b>MUAY THAI</b> and <b>KICKBOXING</b> fights, both in a gym and outdoors.</p>
                <Cards cardsArray={cardsBoxing} variant={'video'}/>
            </div>}
            {(cardsVariant === 'all' || cardsVariant === 'mix') && <div>
                <p>Mixed Wrestling</p>
                <p>Namazon’s man-on-woman wrestling matches are all highly competitive and carried out according to the rules of SUBMISSION GRAPPLING, with no time limit in any individual fight.</p>
                <Cards cardsArray={cardsMix} variant={'video'} isReversed={true}/>
            </div>}
        </>

    )
}