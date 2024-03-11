import React, {useState} from 'react'
import {Col, Row} from "react-bootstrap"
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {ButtonGallery, MyYouTube} from "../../common/common"
import cn from "classnames"

const images = require.context('src/img/video/13', false)

export const Video13 = () => {
    const videoNumber = 13
    const youtubeID = '0-6S3nnMNYk'

    const [index, setIndex] = useState(-1)
    const [open, setOpen] = useState(false)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)
    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Valentina Perfilyeva vs Nadezhda Akhmerova. Kickboxing. 2011</h4>
            <p>In this video you will be able to see two kickboxing fights with low kicks allowed. <b>Valentina
                Perfilyev</b>a (5'8" / 132 lb) is specialized in karate (kumite), while <b>Nadezhda Akhmerova</b> (5'6"
                / 128 lb) goes in for kickboxing.
            </p>
            <Row>
                <Col className={cn('d-flex', 'justify-content-center')}>
                    <MyYouTube videoId={youtubeID}/>
                </Col>
            </Row>
            <p>
                Both fights were hard and uncompromising, with the girls kicking and punching each other aggressively,
                exchanging strikes, a lot of which were accurate and strong.<br/>
                If you like kickboxing, then you will possibly love this film. Watch it and you will know which girl and
                how won in the end.
            </p>
            <ButtonGallery
                index={index}
                indexCallback={setIndex}
                isOpen={open}
                openCloseCallback={setOpen}
                photos={photos}
                slides={slides}
            />
            <Row>
                <hr/>
                <p>You can buy <b>VIDEO {videoNumber}</b> at <a href="https://gumroad.com/namazonclub"> Gumroad </a></p>
            </Row>
        </>
    )
}