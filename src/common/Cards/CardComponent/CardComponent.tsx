import React from 'react'
import Card from 'react-bootstrap/Card'
import {NavLink} from "react-router-dom"
import s from './CardComponent.module.scss'
import {CardType} from "src/common/types"

export const CardComponent = (props: CardType) => {
    return (
        <Card className={s.card}>
            <NavLink to={'/videos/'+ props.id}>
                <Card.Img src={props.imgRef} alt={'video-' + props.id} className={s.cardImgTop}/>
            </NavLink>
            <NavLink to={'/videos/'+ props.id}>
                <Card.Body className={s.cardBody}>
                    {'VIDEO ' + props.id + '\n' + props.title}
                </Card.Body>
            </NavLink>
        </Card>
    )
}