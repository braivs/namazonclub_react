import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useExtractVideoID} from "../../common/hooks"

const images = require.context('src/img/video/16', false)

export const NC16 = () => {
  const videoNumber = useExtractVideoID()
  const youtubeID = '-uNa-IIOOQk'

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)

  return (
    <>
      <h3>{videoNumber}</h3>
      <h4>Elena Vasilyeva vs Tais. Submission Grappling. Youth vs Experience. June, 2011</h4>
      <p>
        <b>Elena Vasilyeva (Gladiatriks)</b> (5'6" / 135 lb) specializes in submission grappling, MMA, judo, and arm
        wrestling. <b>Tais</b> (5'7" / 130 lb) also specializes in submission grappling and MMA. To win this
        competition, the girls needed not only physical strength and wrestling skill but also a lot of endurance.<br/>
        The fight consisted of 9 rounds, each with no time limit, lasting until there was a clear winner. Between each
        round, the fighters had only 1 minute to rest.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>Each round was fought hard and aggressively, with the girls giving all their strength to win the battle.</p>
      <p>
        Which of the girls was more exhausted? And who was the winner in the end? You can find out by purchasing our
        film.
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