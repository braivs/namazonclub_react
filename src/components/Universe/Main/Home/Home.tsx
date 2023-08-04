import React from "react"
import {SumbissionGrappling} from "src/localdata/homeCards/SumbissionGrappling"
import {Mixwrestling} from "src/localdata/homeCards/Mixwrestling"
import {MMA} from "src/localdata/homeCards/MMA"
import s from "./Home.module.scss"
import {ArticleCard} from "./ArticleCard"
import {Maslenitsa2016} from "src/localdata/homeCards/Maslenitsa2016"
import {Row} from "react-bootstrap"

export function Home() {
    return (
        <div className={s.Home}>
            <Row className={s.rowMy}>
                <ArticleCard children={<SumbissionGrappling/>}/>
                <ArticleCard children={<Mixwrestling/>}/>
            </Row>
            <Row className={s.rowMy}>
                <ArticleCard children={<MMA/>}/>
                <ArticleCard children={<Maslenitsa2016/>}/>
            </Row>
        </div>
    )
}