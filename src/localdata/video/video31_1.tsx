import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {ButtonGallery, MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"

const images = require.context('src/img/video/31_1', false)

export const Video31_1 = () => {
    const videoNumber = '31_1'
    const youtubeID = '0C9U65HQSxY'

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Mixed Wrestling - the Best Fights. Part 5.1. 2013</h4>
            <p>
                This is the first part of the fifth video of the series titled "<b>Mixed wrestling - the best fights</b>".
                The reason why we decided to divide the entire video into two parts is that all the fights had taken
                place in one day but they could not all go in one video due to the site-imposed file size
                limits. <b>Tais</b> (5'7" / 135 lb) and <b>Villian</b> (5'8" / 177 lb) know each other very well and are
                about equal in terms of wrestling ability. The fights between them are usually extremely competitive,
                uncompromisingly hard and interesting from a technical point of view.
            </p>
            <Row>
                <Col className={cn('d-flex', 'justify-content-center')}>
                    <MyYouTube videoId={youtubeID}/>
                </Col>
            </Row>
            <p>
                On this day it was no exception. This part of the video includes the first five fights of the day.<br/>
                Highly recommended for those of you who like real competitive mixed!
            </p>
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