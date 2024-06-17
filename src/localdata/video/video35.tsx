import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/video/35', false)

export const Video35 = () => {
    const videoNumber = 35
    const youtubeID = 'tYIIf2sPt4c'

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)

    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
      <>
        <h3>VIDEO {videoNumber}</h3>
        <h4>Pins matches. Lidiya Oslopovskih, a newcomer in the Namazon Club's wrestling competitions. 2013</h4>
        <p>
          Lovely young lady, <b>Lidiya Oslopovskih</b> (53 kg / 117 lbs), is a newcomer to the Namazon wrestling
          competitions. She is a small but agile fighter, with a very well-built body. In this video, you can see
          her three fights with the strongest and most experienced woman of the club, <b>Tais</b> (60 кг / 132 lb).
        </p>
        <Row>
          <Col className={cn('d-flex', 'justify-content-center')}>
            <MyYouTube videoId={youtubeID}/>
          </Col>
        </Row>
        <p>
          It’s somewhat interesting and exciting to watch how Lidiya struggles, especially on the ground.
          The rules required the opponents to wrestle to submission only, regardless of whether one wrestler would pin the
          other to submission or use another move. This time Tais decided to use a little "naughty" tactic for
          success.
        </p>
        <p>
          If you like to watch competitive mat wrestling between two strong and fit women and if you like to see
          some long pin holds, as well as some hard attempts of the bottom lady to bridge out of these pins, then
          this video is highly recommended for you.
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