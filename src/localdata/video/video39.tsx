import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {NavLink} from "react-router-dom"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/video/39', false)

export const Video39 = () => {
  const videoNumber = 39
  const youtubeID = 'kpBVV_5iaYQ'

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)

  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>Mixed wrestling. Villian vs Tais. Part 1. 2014</h4>
      <p>
        In comparison with Alexandr, whom you can see in our <NavLink to="/universe/video/38">VIDEO
        38</NavLink>, <b>Villian</b> doesn’t appear as big and strong, weighing only 180 pounds. However, he compensates
        with speed, experience, and wrestling skill. In their personal matches, Villian usually emerges as the victor.
        Interestingly, despite being 44 pounds lighter than Villian, <b>Tais</b> finds it easier to fight Villian than
        Alexandr because she can more effectively apply her techniques against him.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>
        This video showcases six competitive fights, all of which were real and intense! You can judge from the screens
        below how intense and uncompromising the battles were. If you enjoy competitive mixed wrestling,
        then <b>VIDEO {videoNumber}</b> is definitely for you.
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