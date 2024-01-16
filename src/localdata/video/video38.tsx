import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {ButtonGallery, MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"

const images = require.context('src/img/video/38', false)

export const Video38 = () => {
    const videoNumber = 38
    const youtubeID = 'Syc6WtXS2w0'

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Mixed Wrestling. Alexander against Tais. 2014</h4>
            <p>
                Here you can see another real wrestling fight between a man and woman. <b>Alexandr</b> (5'10" / 187 lb)
                is pretty big and very strong. <b>Tais</b> (5'7" / 137 lb) has difficulties applying her technique due
                to his size. However, she is strong and fast enough to efficiently use Alex's relative slowness.
            </p>
            <Row>
                <Col className={cn('d-flex', 'justify-content-center')}>
                    <MyYouTube videoId={youtubeID}/>
                </Col>
            </Row>
            <p>
                If you are a lover of real competitive mixed wrestling and enjoy aggressive and uncompromised struggle
                between a man and woman on a mat, then we recommend you to watch this video.
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