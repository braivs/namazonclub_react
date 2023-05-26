import React from 'react'
import {CardComponent} from "./CardComponent/CardComponent"
import {Row} from "react-bootstrap"
import s from './Cards.module.scss'
import {CardType} from "../types"

export const Cards = (props: PropsType) => {
    return (
        <div>
            <Row className={s.cardRow}>
                {
                    props.cardsArray.map(e => {
                        return <CardComponent
                            key={e.id}
                            id={e.id}
                            title={e.title}
                            imgRef={e.imgRef}
                            variant={props.variant}
                        />
                    })
                }
            </Row>
        </div>
    )
}

type PropsType = {
    cardsArray: Array<CardType>
    variant: 'video' | 'girls'
}