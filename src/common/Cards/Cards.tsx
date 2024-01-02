import React from 'react'
import {CardComponent} from "./CardComponent/CardComponent"
import {Row} from "react-bootstrap"
import s from './Cards.module.scss'
import {CardType, VariantType} from "../types"

export const Cards = (props: PropsType) => {
    const array = props.isReversed ? props.cardsArray.reverse() : props.cardsArray
    return (
        <div>
            <Row className={s.cardRow}>
                {
                    array.map(e => {
                        return <CardComponent
                            key={e.id}
                            id={e.id}
                            title={e.title}
                            imgRef={e.imgRef}
                            variant={props.variant}
                            years={e.years}
                        />
                    })
                }
            </Row>
        </div>
    )
}

type PropsType = {
    cardsArray: Array<CardType>
    variant: VariantType
    isReversed?: boolean
}