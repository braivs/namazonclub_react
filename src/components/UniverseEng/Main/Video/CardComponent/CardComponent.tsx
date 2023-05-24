import React from 'react'
import Card from 'react-bootstrap/Card'
import {NavLink} from "react-router-dom"
import s from './CardComponent.module.scss'
import {CardType} from "src/common/types"

export const CardComponent = (props: CardType) => {
    return (
        <Card className={s.card}>
            <NavLink to={props.linkRef}>
                <Card.Img src={props.imgRef} alt={props.alt} className={s.cardImgTop}/>
            </NavLink>
            <NavLink to={props.linkRef}>
                <Card.Body className={s.cardBody}>
                    {props.title}
                </Card.Body>
            </NavLink>
        </Card>
    )
}