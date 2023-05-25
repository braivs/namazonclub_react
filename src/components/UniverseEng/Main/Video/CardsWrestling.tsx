import React from 'react'
import {CardComponent} from "./CardComponent/CardComponent"
import {Row} from "react-bootstrap"
import s from './CardsWrestling.module.scss'
import {cardsWrestling} from "../../../../localdata/cardsWrestling"

export const CardsWrestling = () => {
    return (
        <div>
            <Row className={s.cardRow}>
                {
                    cardsWrestling.map(e => {
                        return <CardComponent
                            key={e.id}
                            id={e.id}
                            title={e.title}
                            imgRef={e.imgRef}
                        />
                    })
                }

            </Row>
        </div>
    )
}