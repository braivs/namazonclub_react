import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/video/34', false)

export const Video34 = () => {
    const videoNumber = '34'
    const youtubeID = 'U0Eu-u52FQs'

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Mixed Wrestling. Alexander and Villian against Tais. 2013</h4>
            <p>
                In this video you can see a few competitive wrestling fights of <b>Tais</b> (5’7” / 133 lb) against two
                different male opponents, <b>Villian</b> (5’7” / 173 lb) and <b>Alexander</b> (5’10” / 183 lb), who do
                not only outweigh her by at least more than 40 pounds, but also are superior to her in physical
                strength. The rules of the fights are simple – the winner is the one who makes the other submit.
            </p>
            <Row>
                <Col className={cn('d-flex', 'justify-content-center')}>
                    <MyYouTube videoId={youtubeID}/>
                </Col>
            </Row>
            <p>
                In total, there are seven fights included in the video. Actually 14 minutes of intense action with hard
                and strenuous struggle. It required of Tais a great amount of concentration and speed to withstand the
                attacks of the big and strong men. Each of her victories was hard-won, while each defeat took away a lot
                of energy from her.
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