import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/video/32', false)

export const Video32 = () => {
  const videoNumber = '32'
  const youtubeID = 'hOdvtSS6Nbw'

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)

  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>Mixed Wrestling. Artem vs Tais. 2013</h4>
      <p>
        This unique wrestling match took place during Tais's (5'7" / 135 lb) summer vacation in the south of Ukraine in
        2013. Her opponent, <b>Artem</b> (5'11" / 177 lb), had prior experience in competitive wrestling against women,
        including bouts with the well-known bodybuilder <b>Izida</b> early in his career.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>
        Despite not being exceptionally strong, Artem was ambitious and challenged Tais to this "duel" to prove to both
        her and himself that he could compete. The match took place in the woods near the banks of the Dnieper River,
        with sunny weather adding to the excitement of the physical contest under the open sky. The picturesque natural
        setting highlighted the unusualness of the event - a competitive fight between a man and a woman.
      </p>
      <p>If you enjoy this type of wrestling and are curious to see who emerged victorious, watch this video!</p>
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