import React from 'react'
import Card from 'react-bootstrap/Card'
import {NavLink} from "react-router-dom"
import s from './CardComponent.module.scss'
import {CardComponentType, VariantType} from "src/common/types"
import cn from 'classnames'
import {toLink} from "../../helpers"

export const CardComponent = (props: CardComponentType) => {
    const classSwitch = (variant: VariantType) => {
        switch (variant) {
            case "girl":
                return s.girls
            case "video":
            case "competition":
                return s.videoCompetitions
        }
    }

    return (
        <Card className={cn(s.card, classSwitch(props.variant))}>
            <NavLink to={toLink(props)}>
                <Card.Img src={props.imgRef} alt={`${props.variant}-${props.id}`} className={s.cardImgTop}/>
            </NavLink>
            <NavLink to={toLink(props)}>
                <Card.Body className={s.cardBody}>
                    {(props.variant === 'video'
                        ? props.id + '\n' : '')
                        + props.title}
                </Card.Body>
            </NavLink>
        </Card>
    )
}

