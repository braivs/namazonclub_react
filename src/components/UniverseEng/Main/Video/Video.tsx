import React from 'react'
import s from './Video.module.scss'
import {CardsWrestling} from "./CardsWrestling"

export const Video = () => {
    return (
        <div className={s.video}>
            <h3>Videos of the competitions and individual fights at the Namazon Club</h3>
            <h3>Subcategories</h3>
            <p>Wrestling</p>
            <p>This subcategory includes only videos of woman-on-woman wrestling matches that are mostly carried out
                according to the rules of SUBMISSION GRAPPLING</p>
            <CardsWrestling />
        </div>
    )
}