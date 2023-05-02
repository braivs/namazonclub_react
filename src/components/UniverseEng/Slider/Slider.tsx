import React from "react"
import slide1 from 'src/img/sliderEng/slide1.jpg'
import slide2 from 'src/img/sliderEng/slide2.jpg'
import slide3 from 'src/img/sliderEng/slide3.jpg'
import slide4 from 'src/img/sliderEng/slide4.jpg'
import slide5 from 'src/img/sliderEng/slide5.jpg'
import slide6 from 'src/img/sliderEng/slide6.jpg'
import {Carousel} from "react-bootstrap"

export function Slider() {
    return (
        <div>
            <Carousel fade interval={5000} className={'text-center'}>
                <Carousel.Item><img src={slide1} alt="Slide 1" className="d-block w-100"/></Carousel.Item>
                <Carousel.Item><img src={slide2} alt="Slide 2" className="d-block w-100"/></Carousel.Item>
                <Carousel.Item><img src={slide3} alt="Slide 3" className="d-block w-100"/></Carousel.Item>
                <Carousel.Item><img src={slide4} alt="Slide 4" className="d-block w-100"/></Carousel.Item>
                <Carousel.Item><img src={slide5} alt="Slide 5" className="d-block w-100"/></Carousel.Item>
                <Carousel.Item><img src={slide6} alt="Slide 6" className="d-block w-100"/></Carousel.Item>
            </Carousel>
        </div>

    )
}