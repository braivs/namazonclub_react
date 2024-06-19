import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import cn from "classnames"
import {Col, Row} from "react-bootstrap"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/video/10', false)

export const NC10 = () => {
  const videoNumber = 10
  const youtubeID = 'xbguaf9YTGo'

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)
  return (

    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>Mixed Wrestling - the Best Fights. Part 1. 2011</h4>
      <p>We are starting a new series titled "Mixed wrestling - the best fights". In the first part of our film,
        two guys confront <b>Tais</b> (5'7" / 128 lb). One of them - <b>Pasha</b> (5'9" / 143 lb) - is relatively light
        and fast, while the other - <b>Villian</b> (5'8" / 177 lb) - is heavier compared to Tais and slower. We have
        selected what we believe are the most interesting fights of Pasha and Villian against Tais, both on a mat and a
        beach.</p>
      <p>If you want to watch highly competitive mixed wrestling matches fought in a submission grappling style, then
        watch our film.</p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
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