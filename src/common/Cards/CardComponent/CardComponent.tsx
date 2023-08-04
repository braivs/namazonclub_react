import React from 'react'
import Card from 'react-bootstrap/Card'
import {NavLink} from "react-router-dom"
import s from './CardComponent.module.scss'
import {CardType, VariantType} from "src/common/types"
import cn from 'classnames'

export const CardComponent = (props: PropsType) => {
    const classSwitch = (variant: VariantType) => {
        switch (variant) {
            case "girls":
                return s.girls
            case "videos":
            case "competitions":
                return s.videoCompetitions
        }
    }

    const toLink = () => `/universe/${props.variant}/${props.id}`

    return (
        <Card className={cn(s.card, classSwitch(props.variant))}>
            <NavLink to={toLink()}>
                <Card.Img src={props.imgRef} alt={`${props.variant}-${props.id}`} className={s.cardImgTop}/>
            </NavLink>
            <NavLink to={toLink()}>
                <Card.Body className={s.cardBody}>
                    {(props.variant === 'videos'
                        ? 'VIDEO ' + props.id + '\n' : '')
                        + props.title}
                </Card.Body>
            </NavLink>
        </Card>
    )
}

type PropsType = CardType & {
    variant: VariantType
}