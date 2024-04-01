import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/video/04', false)

export const Video04 = () => {
    const videoNumber = 4
    const youtubeID = 'QAgCAy7XJiQ'

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)
    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>"Christmas Cup 2011". Tournament on Submission Grappling</h4>
            <Row>
                <Col className={cn('d-flex', 'justify-content-center')}>
                    <MyYouTube videoId={youtubeID}/>
                </Col>
            </Row>
            <p>
                In the tournament participated: <b>Natalia Mysik</b> (5'11" / 154 lb), <b>Ksenia Voloshina</b> (5'3" /
                141 lb) and <b>Valentina Perfilyeva</b> (5'8" / 139 lb). A feature of the competition was a big
                disparity in weight and height between the wrestlers.<br/>
                One of them (Natalia) was much heavier and taller than the others. Using this advantage, she frequently
                put her opponents in pinning holds, especially School Girl Pins, which she would then easily turn into
                armlocks or chokes. One of these chokes even resulted in her opponent’s knockout.<br/>
                Beyond the tournament, there was a prize fight between  Tais  (5'7" / 132 lb) and Natalia Mysik.
            </p>
            <p>If you like long pinning holds, head scissors and chokes in women’s fights, you will love this film.</p>
            <ButtonGallery
                index={index}
                indexCallback={setIndex}
                isOpen={open}
                openCloseCallback={setOpen}
                photos={photos}
                slides={slides}
            />
            <hr/>
            <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
        </>
    )
}