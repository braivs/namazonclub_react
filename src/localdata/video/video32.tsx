import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/video/32', false)

export const Video32 = () => {
    const videoNumber = '32'
    const youtubeID = 'hOdvtSS6Nbw'

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Mixed Wrestling. Artem vs Tais. 2013</h4>
            <p>
                This unusual wrestling match took place during a summer vacation which <b>Tais</b> (5'7" / 135 lb) spent
                in the south of Ukraine in 2013. <b>Artem</b> (5'11" / 177 lb), who now was Tais’s opponent, had already
                had some experience in competitive wrestling against women (including several fights with well-known
                bodybuilder <b>Izida</b> at her early career stage).
            </p>
            <Row>
                <Col className={cn('d-flex', 'justify-content-center')}>
                    <MyYouTube videoId={youtubeID}/>
                </Col>
            </Row>
            <p>
                Artem is not a very strong guy but he is ambitious enough because he challenged Tais to this “duel”,
                wanting to show her - and himself - that he CAN be a fighter! He invited her to wrestle in the woods
                near the banks of the Dnieper River. Nice sunny weather was favoring the exciting physical contest under
                the open sky, while the colorful scenic beauty of the nature emphasized the unusualness of the event –
                the competitive fight between the man and woman.
            </p>
            <p>If you love this type of wrestling and are curious to see who kicked who's ass, then watch this
                video!</p>
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