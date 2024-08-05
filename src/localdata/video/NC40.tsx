import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {NavLink} from "react-router-dom"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useExtractVideoID} from "../../common/hooks"
import {LINK_SHOP_MAIN} from "src/common/constants/shopLinks"

const images = require.context('src/img/video/40', false)

export const NC40 = () => {
  const videoNumber = useExtractVideoID()
  const youtubeID = '_nBXLJXazc0'

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)

  return (
    <>
      <h3>{videoNumber}</h3>
      <h4>Mixed wrestling. Villian vs Tais. Part 2. 2014</h4>
      <p>
        <b>VIDEO {videoNumber}</b> is the continuation of <NavLink to="/video/39">VIDEO 39</NavLink>. Here you
        can see six more wrestling fights between <b>Villian</b> (180 lb) and <b>Tais</b> (136 lb), which took place in
        2014. The two competitors knew each other very well, having wrestled each other many times over the years,
        resulting in always aggressive and competitive fights.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>
        It's noteworthy that although their fights are generally evenly matched, Tais maintains a certain advantage over
        Villian. She adeptly utilizes her legs to control her opponents, a skill Villian lacks expertise in.
        Additionally, Villian's legs are more susceptible to submission holds when on the ground.<br/>
        If you're a fan of competitive wrestling between a man and woman, then this <b>VIDEO</b> is for you!
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