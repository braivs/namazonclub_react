import React from "react"
import {NavLink} from "react-router-dom"
import s from "./Welcome.module.scss"
import {Carousel, Col, Container, Row} from "react-bootstrap"
import slide01 from '../../img/sliderIndex/01.jpg'
import slide02 from '../../img/sliderIndex/02.jpg'
import slide03 from '../../img/sliderIndex/03.jpg'
import slide04 from '../../img/sliderIndex/04.jpg'
import slide05 from '../../img/sliderIndex/05.jpg'
import slide06 from '../../img/sliderIndex/06.jpg'
import cn from 'classnames'

export function Welcome() {
    const onClick = () => {
        window.alert('В процессе...')
    }

    return (
        <div className={s.welcome}>
            <Container fluid className={'d-flex flex-column'}>
                <Carousel fade controls={false} indicators={false} interval={1500} className={'text-center'}>
                    <Carousel.Item><img src={slide01} alt="Slide 01"/></Carousel.Item>
                    <Carousel.Item><img src={slide02} alt="Slide 02"/></Carousel.Item>
                    <Carousel.Item><img src={slide03} alt="Slide 03"/></Carousel.Item>
                    <Carousel.Item><img src={slide04} alt="Slide 04"/></Carousel.Item>
                    <Carousel.Item><img src={slide05} alt="Slide 05"/></Carousel.Item>
                    <Carousel.Item><img src={slide06} alt="Slide 06"/></Carousel.Item>
                </Carousel>
                <Row className={cn('text-center', s.buttonContainer)}>
                    <Col>
                        <button className="btn btn-primary btn-lg" type="button" onClick={onClick}>Вход</button>
                        <NavLink to="/universeeng/home" className={s.myBtn}>
                            <button className="btn btn-primary btn-lg" type="button">Enter</button>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}