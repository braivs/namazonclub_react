import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useExtractVideoID} from "../../common/hooks"
import {LINK_SHOP_MAIN} from "../../common/constants/shopLinks"

const images = require.context('src/img/video/02', false)

export const NC02 = () => {
  const videoNumber = useExtractVideoID()
  const youtubeID = 'Y_ixTzxIj44'

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)
  return (
    <>
      <h3>{videoNumber}</h3>
      <h4>Submission Grappling. Tournament. Part 2. June, 2010</h4>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>
        This is the continuation of movie 1, featuring all the matches from the second round.<br/>
        Here, you can witness another aggressive fight between two favorites: <b>Tais</b> (5'7" / 128 lb) and <b>Maria
        Rylyova</b> (5'7" / 126 lb). Particularly dramatic were the bouts involving <b>Nadezhda Akhmerova</b> (5'6"
        / 128 lb). In her match against Tais, Nadezhda was knocked down but managed to continue the fight.<br/>
        Against Maria, Nadezhda put up a fierce struggle, with the advantage shifting back and forth between the two
        competitors.
      </p>
      <p>If you want to witness these intense matches and find out the final results, watch the film!</p>
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

//todo: this is not mixed part of tournament, maybe rename