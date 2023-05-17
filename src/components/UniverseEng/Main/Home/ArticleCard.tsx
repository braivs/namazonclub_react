import React, {ReactNode} from "react"
import {Col} from "react-bootstrap"

export function ArticleCard(props: PropsType) {
    return (
        <Col md={6}>
            {props.children}
        </Col>
    )
}

type PropsType = {
    children: ReactNode
}