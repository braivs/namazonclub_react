import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/video/31_1', false)

export const Video31_1 = () => {
  const videoNumber = '31_1'
  const youtubeID = '0C9U65HQSxY'

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)

  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>Mixed Wrestling - the Best Fights. Part 5.1. 2013</h4>
      <p>
        This is the first part of the fifth video in the series titled "<b>Mixed wrestling - the best fights</b>".
        The reason for dividing the entire video into two parts is that all the fights took place on the same day, but
        they couldn't fit into one video due to file size limits on the site. <b>Tais</b> (5'7" / 135 lb)
        and <b>Villian</b> (5'8" / 177 lb) are familiar opponents who are evenly matched in wrestling ability. Their
        matches are consistently competitive, fiercely contested, and technically interesting.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>
        This part of the video includes the first five fights of the day. If you enjoy real competitive mixed wrestling,
        this is highly recommended!
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