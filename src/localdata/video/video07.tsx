import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/video/07', false)

export const Video07 = () => {
  const videoNumber = 7
  const youtubeID = 'sKIu0T-a4wE'

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)
  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>Gray Wolf (Alex) vs Red Riding Hood (Tais). Extreme fight in cold weather. April 2011</h4>
      <p><b>Alex</b> (5'7" / 150 lb) hadn’t forgotten the loss to <b>Tais</b> (5'7" / 128 lb) in their previous
        beach wrestling match (<b>Video 3</b>), and now, having a transit stay in St. Petersburg, he tried to
        take every opportunity for a rematch. With not enough time to go to the sports hall, it was decided to
        hold the rematch in the forest on the lake shore.<br/>
        A strong cold wind blew on the shore. Tais arrived wearing a red cap …
      </p>
      <p>
        Who eventually won the fight between the modern Little Red Cap and Gray Wolf? Watch our film and find
        out! If you enjoy sporting mixed wrestling, then this film is for you.
      </p>
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