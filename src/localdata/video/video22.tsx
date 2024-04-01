import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/video/22', false)

export const Video22 = () => {
    const videoNumber = 22
    const youtubeID = 'FTCeUYW5O2g'

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Irina and Elena Vasilyeva vs Villian. Mixed Wrestling. 2011</h4>
            <p>
                In these wrestling matches <b>Villian</b> (5’8” / 177 lb) takes on two experienced women (though not
                both at once but one after the other). <b>Irina</b> (5’9” / 154 lb) is a strong woman and she’s been
                engaged in Muay Thai and pole dancing. <b>Elena</b> (5’6” / 135 lb), the youngest one of the three
                participants, is a talented and very ambitious fighter. She’s had a lot of good performances in
                armwrestling, submission grappling and MMA competitions.
            </p>
            <Row>
                <Col className={cn('d-flex', 'justify-content-center')}>
                    <MyYouTube videoId={youtubeID}/>
                </Col>
            </Row>
            <p>If you like mixed wrestling and want to enjoy some competitive mixed wrestling matches fought in a
                submission grappling style then this video is for you.</p>
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