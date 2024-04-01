import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/video/03mix/wm1', false)
const images2 = require.context('src/img/video/03mix/wm2', false)

export const Video03wm = () => {
    const videoNumber = '3wm'
    const youtubeID = 'sddvDSjafEY'

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    const [open2, setOpen2] = useState(false)
    const [index2, setIndex2] = useState(-1)
    const photos2 = getGalleryPhotosFromRequire(images2)
    const slides2 = getSlides(photos2)
    return (
        <>
            <h3>VIDEO 3wm</h3>
            <h4>Beach Wrestling. Mixed Tournament. Two girls vs one man. September, 2010</h4>
            <p>
                <b>Alex</b> came to St. Petersburg at the weekend and offered Tais (5'7" / 132 lb) and <b>Natalia
                Mysik</b> (5'11" / 154 lb) to hold a mixed tournament on beach wrestling. He had been practicing
                wrestling a lot recently, and had become physically stronger - 5'9" / 150 lb, which allowed him to count
                on a successful performance.
            </p>
            <p>The mixed beach tournament went in three rounds. The fights between the girls were hard enough,
                especially in the first two rounds. The mixed contests started with Alex’s convincing win over Natalia .
                Then the luck turned away from Alex ...</p>
            <p>If you like <b>mixed competitive wrestling</b>, then we believe you will love our film. Watch how
                everything was!</p>
          <Row>
            <Col className={cn('d-flex', 'justify-content-center')}>
              <MyYouTube videoId={youtubeID}/>
            </Col>
          </Row>
            <h5>Natalia Mysik  vs  Alex </h5>
            <ButtonGallery
                index={index}
                indexCallback={setIndex}
                isOpen={open}
                openCloseCallback={setOpen}
                photos={photos}
                slides={slides}
            />
            <h5>Alex  vs  Tais</h5>
            <ButtonGallery
                index={index2}
                indexCallback={setIndex2}
                isOpen={open2}
                openCloseCallback={setOpen2}
                photos={photos2}
                slides={slides2}
            />
            <hr/>
            <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
        </>
    )
}