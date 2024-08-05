import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useExtractVideoID} from "../../common/hooks"
import {LINK_SHOP_MAIN} from "src/common/constants/shopLinks"

const images = require.context('src/img/video/31_2', false)

export const NC31_2 = () => {
  const videoNumber = useExtractVideoID()
  const youtubeID = '-3kHYn2U8Vo'

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)

  return (
    <>
      <h3>{videoNumber}</h3>
      <h4>Mixed Wrestling - the Best Fights. Part 5.2. 2013</h4>
      <p>
        This is the second part of the fifth video in the series titled <b>«Mixed wrestling - the best fights»</b>. It
        features four intense bouts between <b>Tais</b> (5'7" / 135 lb) and <b>Villian</b> (5'8" / 177 lb). Refer to the
        description of Part 5.1 for more details.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>
        Our mixed wrestling contests are always purely competitive (not semi-competitive!) and showcase high-standard
        wrestling performances. On the mat, there are only fighters, regardless of gender.
      </p>
      <p>To discover the outcomes of these matches (including who scored the most submissions and emerged victorious),
        watch the video.</p>
      <ButtonGallery
        index={index}
        indexCallback={setIndex}
        isOpen={open}
        openCloseCallback={setOpen}
        photos={photos}
        slides={slides}
      />
      <hr/>
      <p>You can buy <b>VIDEO {videoNumber}</b> on <a href={LINK_SHOP_MAIN}>Patreon</a>.</p>
    </>

  )
}