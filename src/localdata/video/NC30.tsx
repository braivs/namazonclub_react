import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from 'react-bootstrap'
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/video/30', false)

export const NC30 = () => {
    const videoNumber = 30
    const youtubeID = 'Xf_8wprghvA'

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
      <>
        <h3>VIDEO {videoNumber}</h3>
        <h4>Mixed Wrestling - the Best Fights. Part 4. 2013</h4>
        <p>
          This is the fourth video in the series titled "Mixed wrestling - the best fights". It showcases a
          four-and-a-half-minute submission match between two long-time rivals: Tais (5'7" / 135 lb) and Villian (5'8" /
          177 lb). These fighters are intimately familiar with each other and are nearly evenly matched. The video
          features three rounds of intense, aggressive, and highly competitive wrestling on a mat, with momentum swinging
          back and forth between the man and the woman in each round.
        </p>
        <Row>
          <Col className={cn('d-flex', 'justify-content-center')}>
            <MyYouTube videoId={youtubeID}/>
          </Col>
        </Row>
        <p>The winner is determined at the very end of the match. Watch the video to discover who emerges victorious!</p>
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