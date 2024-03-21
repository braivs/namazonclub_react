import {Col} from "react-bootstrap"
import cn from "classnames"
import sC from "./styles.module.scss"
import React from "react"

export const MainImg = (props: Props) => {
    return (
        <Col className={cn('d-flex', 'justify-content-center')}>
            <img className={sC.videosMainImg} src={props.imgMain} alt="imgMain"/>
        </Col>
    )
}

type Props = {
    imgMain: string
}