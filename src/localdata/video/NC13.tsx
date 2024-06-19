import React, {useState} from 'react'
import {Col, Row} from "react-bootstrap"
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/video/13', false)

export const NC13 = () => {
  const videoNumber = 13
  const youtubeID = '0-6S3nnMNYk'

  const [index, setIndex] = useState(-1)
  const [open, setOpen] = useState(false)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)
  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>Valentina Perfilyeva vs Nadezhda Akhmerova. Kickboxing. 2011</h4>
      <p>In this video, you will witness two kickboxing matches where low kicks are allowed. <b>Valentina
        Perfilyeva</b> (5'8" / 132 lb) specializes in karate (kumite), while <b>Nadezhda Akhmerova</b> (5'6"
        / 128 lb) practices kickboxing.</p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>Both fights were intense and uncompromising, featuring aggressive exchanges of kicks and punches, with many
        strikes landing accurately and powerfully.</p>
      <p>If kickboxing is your passion, this film is likely to captivate you. Watch it to find out who emerged
        victorious.</p>
      <ButtonGallery
        index={index}
        indexCallback={setIndex}
        isOpen={open}
        openCloseCallback={setOpen}
        photos={photos}
        slides={slides}
      />
      <Row>
        <hr/>
        <p>You can purchase <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
      </Row>
    </>
  )
}