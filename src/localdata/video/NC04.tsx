import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useExtractVideoID} from "../../common/hooks"

const images = require.context('src/img/video/04', false)

export const NC04 = () => {
    const videoNumber = useExtractVideoID()
    const youtubeID = 'QAgCAy7XJiQ'

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)
    return (
      <>
        <h3>{videoNumber}</h3>
        <h4>"Christmas Cup 2011". Tournament on Submission Grappling</h4>
        <Row>
          <Col className={cn('d-flex', 'justify-content-center')}>
            <MyYouTube videoId={youtubeID}/>
          </Col>
        </Row>
        <p>
          Participants in the tournament included: <b>Natalia Mysik</b> (5'11" / 154 lb), <b>Ksenia Voloshina</b> (5'3" / 141 lb), and <b>Valentina Perfilyeva</b> (5'8" / 139 lb). A notable feature of the competition was the significant disparity in weight and height among the wrestlers.<br/>
          Natalia, being much heavier and taller than her opponents, frequently used this advantage to secure pinning holds, particularly School Girl Pins, which she would then easily convert into armlocks or chokes. One of these chokes even resulted in a knockout for her opponent.<br/>
          Additionally, outside of the tournament, there was a prize fight between Tais (5'7" / 132 lb) and Natalia Mysik.
        </p>
        <p>If you enjoy watching long pinning holds, head scissors, and chokes in women’s fights, you will love this film.</p>
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