import React from 'react'
import Card from 'react-bootstrap/Card'
import {NavLink} from "react-router-dom"
import s from './CardComponent.module.scss'
import {CardType} from "src/common/types"
import cn from 'classnames'

export const CardComponent = (props: PropsType) => {
    return (
        <Card className={cn(s.card, props.variant === 'girls' ? s.girls : s.video)}>
            <NavLink to={'/videos/'+ props.id}>
                <Card.Img src={props.imgRef} alt={'video-' + props.id} className={s.cardImgTop}/>
            </NavLink>
            <NavLink to={'/videos/'+ props.id}>
                <Card.Body className={s.cardBody}>
                    {(props.variant === 'video'
                        ? 'VIDEO ' + props.id + '\n' : '')
                        + props.title}
                </Card.Body>
            </NavLink>
        </Card>
    )
}

type PropsType = CardType & {
    variant: 'video' | 'girls'
}