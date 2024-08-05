import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useExtractVideoID} from "../../common/hooks"
import {LINK_SHOP_MAIN} from "../../common/constants/shopLinks"

const images = require.context('src/img/video/05', false)

export const NC05 = () => {
  const videoNumber = useExtractVideoID()
  const youtubeID1 = 'hGAZo2Ffrz4'
  const youtubeID2 = '4tJDir4UPXU'

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)
  return (
    <>
      <h3>{videoNumber}</h3>
      <h4>Villian vs Tais. Mixed Wrestling. 2011</h4>
      <p>This film features a completely new wrestling encounter between <b>Villian</b> and <b>Tais</b>, spanning 9
        rounds of long and arduous wrestling, presented in HD quality with an optimized file size! <b>Villian</b>
        (5'8" / 177 lb) is a friend of our club and a constant sparring partner of our girls. <b>Tais</b> (5'7" / 132
        lb) is the strongest girl at the Namazon Club.</p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID1}/>
        </Col>
      </Row>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID2}/>
        </Col>
      </Row>
      <p>
        This is the first video of our NEW SERIES of mixed matches. We showcase only real mixed wrestling, no
        compromises. It's a battle of the sexes to victory!
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
      <p>You can buy <b>VIDEO {videoNumber}</b> on <a href={LINK_SHOP_MAIN}>Patreon</a>.</p>
    </>

  )
}