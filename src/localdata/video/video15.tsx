import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {ButtonGallery, MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"

const images = require.context('src/img/video/15', false)

export const Video15 = () => {
    const videoNumber = 15
    const youtubeID = 'piZ5J6Rierc'

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)
    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Two men against one woman. Mixed wrestling on a beach. Part 2. 2011</h4>
            <p>
                In this video you can see what happened a few days later after the 1st part of the mixed beach
                tournament (<b>Video 14</b>). <b>Alex</b> (5’9” / 154 lb) and <b>Villian</b> (5’8” / 177 lb) insisted on
                continuing to wrestle. <b>Tais</b> (5’7” / 130 lb) accepted the challenge of the two men and wrestled
                them a few more times.
            </p>
            <Row>
                <Col className={cn('d-flex', 'justify-content-center')}>
                    <MyYouTube videoId={youtubeID}/>
                </Col>
            </Row>
            <p>The action took place on the sandy beach and on the grass. It was a nice sunny day, which helped us make
                a colorful video. The video includes several fights, each of which ends with the submission of one
                fighter.</p>
            <p>If you like competitive mixed wrestling where a woman struggles hard against a man, then buy our
                film.</p>
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

//todo: change main image to multiple, because many fights inside. And look for same in another videos.