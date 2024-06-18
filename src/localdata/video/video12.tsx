import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/video/12', false)

export const Video12 = () => {
  const videoNumber = 12
  const youtubeID = 'tB47JzDQ-mc'

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)
  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>Submission Grappling Tournament. April, 2010</h4>
      <p>
        Two new competitors - <b>Elena Vasilyeva</b> (5'6" / 135 lb) and <b>Irina (Vlasta)</b> (5’9’’ / 154 lb) -
        participated in the beach wrestling tournament alongside <b>Tais</b> (5’7” / 130 lb). Elena specializes in
        submission grappling, judo, and arm wrestling, while Irina specializes in submission grappling, muay thai, and
        pole dancing.<br/>
        The tournament was held in two rounds with no time limits. The battle for the 2nd place between the newcomers
        was especially tough and intense. Young and skilled Elena fought bravely against the older Irina.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>However, to find out how the fights between our favorites ended, who won, and how, you will need to watch our
        film.</p>
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