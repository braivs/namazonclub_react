import React from 'react'
import Card from 'react-bootstrap/Card';
import {NavLink} from "react-router-dom"
import power2016 from 'src/img/video/wrestThumb/2016-power competition on Shrove Tuesday.jpg'
import s from './CardComponent.module.scss'

export const CardComponent = () => {
    return (
        <Card className={s.card}>
            <NavLink to={'/universeeng/videos/44Eng'}>
                <Card.Img src={power2016} alt={'video-44'} className={s.cardImgTop}/>
            </NavLink>
            <NavLink to={'/universeeng/videos/44Eng'}>
                <Card.Body>VIDEO 44</Card.Body>
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
    title: string
    ref: string
    imgRef: string
    alt: string
}