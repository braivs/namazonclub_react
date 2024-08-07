import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useExtractVideoID} from "../../common/hooks"
import {LINK_SHOP_MAIN} from "src/common/constants/shopLinks"

const images = require.context('src/img/video/28/tais-alexander', false)
const images2 = require.context('src/img/video/28/tais-villian', false)

export const NC28 = () => {
  const videoNumber = useExtractVideoID()
  const youtubeID = '6nP3PAUF7hw'

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)

  const [open2, setOpen2] = useState(false)
  const [index2, setIndex2] = useState(-1)
  const photos2 = getGalleryPhotosFromRequire(images2)
  const slides2 = getSlides(photos2)

  return (
    <>
      <h3>{videoNumber}</h3>
      <h4>Mixed Wrestling - the Best Fights. Part 3. 2013</h4>
      <p>
        This is the third video of the series titled "<b>Mixed wrestling - the best fights</b>". Here you can
        see two separate wrestling matches featuring <b>Tais</b> (5'7" / 132 lb) against two male
        opponents: <b>Villian</b> (5'8" / 177 lb) and <b>Alexander</b> (5’10’’ / 205 lb). Despite Tais's strength
        and experience, she faced challenging opponents, particularly against the significantly heavier Alexander,
        who outweighed her by 73 lb.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>To discover the outcomes of these tough matches, watch this video.</p>
      <h5>Tais vs Alexander</h5>
      <ButtonGallery
        index={index}
        indexCallback={setIndex}
        isOpen={open}
        openCloseCallback={setOpen}
        photos={photos}
        slides={slides}
      />
      <h5>Tais vs Villian</h5>
      <ButtonGallery
        index={index2}
        indexCallback={setIndex2}
        isOpen={open2}
        openCloseCallback={setOpen2}
        photos={photos2}
        slides={slides2}
      />
      <hr/>
      <p>You can buy <b>VIDEO {videoNumber}</b> on <a href={LINK_SHOP_MAIN}>Patreon</a>.</p>
    </>

  )
}

//todo: change main image to multiple, because many fights inside. And look for same in another videos.