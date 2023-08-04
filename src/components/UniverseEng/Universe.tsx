import React from "react"
import s from "./UniverseEng.module.scss"
import {Header} from "./Header/Header"
import {Slider} from "./Slider/Slider"
import {Main} from "./Main/Main"
import {Footer} from "./Footer/Footer"
import {Container} from "react-bootstrap"

export function Universe() {
    return (
        <div className={s.MainEngWrapper}>
            <Container>
                <Header/>
                <Slider/>
                <Main/>
                <Footer/>
            </Container>
        </div>
    )
}

