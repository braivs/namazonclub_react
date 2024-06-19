import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/video/34', false)

export const NC34 = () => {
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
        This video features several competitive wrestling matches of <b>Tais</b> (5’7” / 133 lb) against two male
        opponents, <b>Villian</b> (5’7” / 173 lb) and <b>Alexander</b> (5’10” / 183 lb). Both men outweigh her by more
        than 40 pounds and possess superior physical strength. The rules are straightforward - victory is achieved by
        making the opponent submit.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>
        The video includes seven fights totaling 14 minutes of intense action filled with hard and strenuous struggles.
        Tais needed exceptional concentration and speed to withstand the attacks from these larger opponents. Each of
        her victories was hard-won, and each defeat drained her energy significantly.
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