import s from "./Logo.module.scss"
import React from "react"
import {Col, Row} from "react-bootstrap"

export function Logo() {
    return (
        <div className={s.logo}>
            <Row className={s.row}>
                <Col>
                    <h1>Namazon</h1>
                    <h2>Club of single combats for women</h2>
                </Col>
            </Row>
        </div>
    )
}