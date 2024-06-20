import React, {useState} from 'react'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useExtractVideoID} from "../../common/hooks"

const images = require.context('src/img/video/29', false)

export const NC29 = () => {
  const videoNumber = useExtractVideoID()
  const youtubeID = 'HaMtoel8Tdw'

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)

  const photos = getGalleryPhotosFromRequire(images)
  const slides = photos.map(({src}) => ({src}))

  return (
    <>
      <h3>{videoNumber}</h3>
      <h4>Elena Vasilyeva vs Tais. Submission Grappling. June 2013</h4>
      <p>
        <b>Elena</b> (5'7" / 157 lb) is a strong and ambitious young woman. She had fought <b>Tais</b> (5'7" / 130 lb)
        many times two years ago, but then she disappeared from the Club. Now she’s back, stronger, heavier, more
        skillful, and confident than ever.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>k
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>Right from the start, it’s clear that Elena intends to give her experienced rival a real fight. Despite Tais
        being very strong, she immediately finds herself in trouble against the aggressive Elena. After 15 intense
        minutes of wrestling, she is forced to admit defeat.<br/>
        This marks the first time Tais has lost a competitive submission match to Elena.</p>
      <p>If you’re curious to see how it all unfolded, watch this video.</p>
      <ButtonGallery
        index={index}
        indexCallback={setIndex}
        isOpen={open}
        openCloseCallback={setOpen}
        photos={photos}
        slides={slides}
      />
      <hr/>
      <p>You can purchase <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
    </>

  )
}