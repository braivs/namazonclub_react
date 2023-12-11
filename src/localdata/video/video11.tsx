import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {ButtonGallery, MyYouTube} from "../../common/common"
import cn from "classnames"
import {Col, Row} from "react-bootstrap"

const images = require.context('src/img/video/11', false)

export const Video11 = () => {
    const videoNumber = 11
    const youtubeID = '_T6qzHq5H60'

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Alex vs Elena Vasilyeva (Gladiatriks), Mixed Beach Wrestling. July, 2011</h4>
            <p>
                Alex vs Elena Vasilyeva. Mixed Beach Wrestling. July, 2011<br/>
                This film features two fights for the 3rd place between <b>Elena Vasilyeva</b> (5’6” / 135 lb)
                and <b>Alex</b> (5’9” / 154 lb), which have been held as part of the mixed wrestling tournament (St.
                Petersburg, July 2011). Each individual fight had no time limit, according to the rules of the
                tournament.<br/>
                The struggle between Elena and Alex proved to be extremely hard and exhausting. Suffice it to say that
                their first fight lasted more than 12 minutes.
            </p>
            <Row>
                <Col className={cn('d-flex', 'justify-content-center')}>
                    <MyYouTube videoId={youtubeID}/>
                </Col>
            </Row>
            <p>
                If you like sporting mixed wrestling, where there are choke holds, body scissors and head scissors, then
                we believe you will love our film. Watch our film and you will know who - <b>Elena</b> or <b>Alex</b> -
                took the 3rd place in this mixed tournament.
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