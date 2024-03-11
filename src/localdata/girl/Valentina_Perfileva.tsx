import sC from "../../common/styles.module.scss"
import imgMain from 'src/img/girl/valentina_perfileva/valentina.jpg'
import React from "react"
import {Col, Container, Row} from "react-bootstrap"
import cn from "classnames"
import {MyYouTube} from "../../common/common"

export const ValentinaPerfileva = () => {
    return (
        <>
            <h4>VALENTINA PERFILYEVA</h4>
            <Col className={cn('d-flex', 'justify-content-center')}>
                <img className={sC.videosMainImg} src={imgMain} alt="imgMain"/>
            </Col>
            <p>
                <b>Valentina Perfilyeva</b> ( 5'8" / 132 lb ) - the participant of tournaments of "NAMAZON" club in
                SUBMISSION GRAPPLING,<br/>
                the winner of the Olympic Games of martial arts "EAST-WEST" in karate (kumite).
            </p>
        </>
)
}