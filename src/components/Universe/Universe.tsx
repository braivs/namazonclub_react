import React from "react"
import s from "./Universe.module.scss"
import {Header} from "./Header/Header"
import {Slider} from "./Slider/Slider"
import {Main} from "./Main/Main"
import {Footer} from "./Footer/Footer"
import {Container} from "react-bootstrap"
import {GalleryDataProvider} from "../../common/GalleryDataProvider"

export function Universe() {
    return (
        <div className={s.MainEngWrapper}>
            <Container>
                <Header/>
                <Slider/>
                <GalleryDataProvider>
                    <Main/>
                </GalleryDataProvider>
                <Footer/>
            </Container>
        </div>
    )
}

