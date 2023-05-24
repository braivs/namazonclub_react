import React, {ReactNode} from 'react'
import Card from 'react-bootstrap/Card'
import {NavLink} from "react-router-dom"
import s from './CardComponent.module.scss'

export const CardComponent = (props: PropsType) => {
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

/*
* mixin card(title,ref,imgref,alt)
  .card.cardGirls
    a(href=ref)
      img.card-img-top(src=imgref alt=alt)
    .card-body
      a(href=ref) !{title}

* */

type PropsType = {
    title: ReactNode
    linkRef: string
    imgRef: string
    alt: string
}