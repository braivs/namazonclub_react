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
                            title={e.title}
                            linkRef={e.linkRef}
                            imgRef={e.imgRef}
                            alt={e.alt}
                        />
                    })
                }

            </Row>
        </div>
    )
}