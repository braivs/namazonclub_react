import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {ButtonGallery, MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"

const images = require.context('src/img/video/26', false)

export const Video26 = () => {
    const videoNumber = 26
    const youtubeID = 'iBBVt0JNN-Y'

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Female Beach Wrestling. Part 1. June, 2011</h4>
            <p>
                This video features a sand-wrestling contest between two ambitious women, <b>Tais</b> (5'7" / 130 lb)
                and <b>Elena Vasilyeva</b> (5'6" / 134 lb). Tais, who has competed in various grappling and MMA
                tournaments, has more experience than her younger opponent. But Elena is not a pushover either. She’s
                also taken part in
            </p>
            <Row>
                <Col className={cn('d-flex', 'justify-content-center')}>
                    <MyYouTube videoId={youtubeID}/>
                </Col>
            </Row>
            <p>The two women fought nine rounds with submission grappling rules. It was an interesting and exciting
                wrestling match with a lot of different pins, chokes and submission holds. The both wrestlers struggled
                arduously for every single point. The weaker woman didn’t give up easily.</p>
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

//todo: maybe fix drop of text in first p