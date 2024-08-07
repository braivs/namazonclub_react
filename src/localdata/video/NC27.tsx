import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useExtractVideoID} from "../../common/hooks"
import {LINK_SHOP_MAIN} from "src/common/constants/shopLinks"

const images = require.context('src/img/video/27', false)

export const NC27 = () => {
  const videoNumber = useExtractVideoID()
  const youtubeID = 'kTj_2JJAFoM'

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)

  return (
    <>

      <h3>{videoNumber}</h3>
      <h4>Female Beach Wrestling. Part 2. June, 2011</h4>
      <p>
        This is a continuation of the multi-round sand-wrestling contest between <b>Tais</b> (5'7" / 130 lb) and <b>Elena
        Vasilyeva</b> (5'6" / 135 lb). The first nine rounds of this exciting match were featured in our Video 26
        (scroll down to see the initial description). In Part 2, you can see eight more rounds fought with the same
        rules as in Part 1.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>Although both women are very ambitious, they are not quite equal in experience and skill. One of them is still
        using nice wrestling combinations, applying effective choking and submission holds, while the other is just
        struggling heavily, showing her fighting spirit and refusing to give up.</p>
      <p>If you enjoy watching strong, skilled, and athletic women in real wrestling, then we recommend you purchase
        this video.</p>
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