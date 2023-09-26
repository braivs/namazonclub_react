import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {ButtonGallery, MyYouTube} from "../../common/common"
import {NavLink} from "react-router-dom"
import {Col, Row} from "react-bootstrap"
import cn from 'classnames'

const images = require.context('src/img/video/37', false)

export const Video37 = () => {
  const videoNumber = 37
  const youtubeID = 'oxAzT_GWSJA'

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)

  return (
    <div className={sC.compArticlesVideoGirl}>
      <h3>VIDEO {videoNumber}</h3>
      <h4>Female submission grappling tournament between beginners. <u>Final fights</u>.<br/>
        Weight class: 145 to 160 lb. May, 2014</h4>
      <p>
        This video is a continuation of the Video 36 that featured the preliminary fights (see its
        description <NavLink to="/universe/videos/36">HERE</NavLink>). Now here you can see two final fights in
        which the loser and the winner of the tournament
        were determined.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>In one of them, Nina and Irina fought with each other for the IV place (for not becoming the outsider),
        and in the other Daria and Victoria decided between themselves who was the best wrestler of the
        competition. The fight Nina vs Irina went fast and ended pretty soon – one of the girls defeated the
        other twice by applying submission holds.</p>
      <p>The final fight was much longer and more strenuous. Suffice it to say that in the first round neither
        wrestler was able to gain a victory within the 4 min of time limit.</p>
      <ButtonGallery
        index={index}
        indexCallback={setIndex}
        isOpen={open}
        openCloseCallback={setOpen}
        photos={photos}
        slides={slides}
      />
      <p>We recommend this video for those of you who like real female wrestling and young sexy-looking girls with
        competitive spirit. You will find it especially entertaining if you are interested to see a fight in
        which one of the two girls grappling on the mat continuously struggles to pin her opponent down and
        finally succeeds after long hard attempts</p>
      <hr/>
      <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
    </div>
  )
}