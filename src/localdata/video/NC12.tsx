import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useExtractVideoID} from "../../common/hooks"

const images = require.context('src/img/video/12', false)

export const NC12 = () => {
  const videoNumber = useExtractVideoID()
  const youtubeID = 'tB47JzDQ-mc'

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)
  return (
    <>
      <h3>{videoNumber}</h3>
      <h4>Submission Grappling Tournament. April, 2010</h4>
      <p>
        This film documents the Submission Grappling tournament held in April 2010, featuring <b>Natalia
        Mysik</b> (5'11" / 154 lb), <b>Maria Rylyova</b> (5'8" / 126 lb), and <b>Valentina Perfilyeva</b> (5'8" / 132
        lb). The
        wrestlers competed across different weight categories, essentially making it a club competition based on total
        weight.
        Natalia, being the heaviest wrestler, was a favorite in the tournament, while Maria was favored for her
        exceptional skill. Maria and Valentina engaged in a closely contested match, showcasing their comparable
        abilities. Natalia demonstrated her superiority over Valentina in their bouts.
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