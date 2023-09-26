import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {ButtonGallery, MyYouTube} from "../../common/common"
import {NavLink} from "react-router-dom"
import {Col} from "react-bootstrap"
import cn from "classnames"

const images = require.context('src/img/video/36', false)

export const Video36 = () => {
  const videoNumber = 36
  const youtubeID = 'kkbQ7YEQ9nQ'

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)

  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>Female submission grappling tournament between beginners. <u>Preliminary fights</u>.<br/>
        Weight class: 145 to 160 lb. May, 2014</h4>
      <p>
        In this competition participate five fighters: Christina (67.4 kg / 148.6 lb), Daria (66.5 kg / 146.6
        lb), Irina (70.7 kg / 155.9 lb), Nina (66.1 kg / 145.7 lb) and Victoria (70.7 kg / 155.9 lb). Rules:
        fights with submissions or pins counted to 10.
      </p>
      <Col className={cn('d-flex', 'justify-content-center')}>
        <MyYouTube videoId={youtubeID}/>
      </Col>
      <p>
        All the girls except Victoria Vardugina, who has already wrestled once before in the Namazon Club, are
        beginners in submission grappling and participate for the first time here in the competition with
        us.<br/>
        About a half a year ago, in October 2013, Vika won a women's <NavLink to="/universe/videos/33">crossfit
        wrestling</NavLink> competition in our club by bringing an uncompromising wrestler
        Lidiya Oslopovskih to submission in the final fight. Vika is a physically strong young woman who not
        only learns how to wrestle, but also competes successfully in college arm wrestling tournaments.
      </p>
      <p>
        Our competition today is notable for a typically FEMALE wrestling. The rules require the winner of a
        match to win at least 2 rounds out of 3. Each round has 4 minutes of time limit.<br/>
        The video includes three matches, the first two ones of which consist of two rounds and the last one
        (Vika vs Christina) goes three rounds.
      </p>
      <ButtonGallery
        index={index}
        indexCallback={setIndex}
        isOpen={open}
        openCloseCallback={setOpen}
        photos={photos}
        slides={slides}
      />
      <p>We recommend you to watch this movie (Video 36) if you like to see some ambitious, athletic girls with
        beautiful bodies competing with each other in a hard-fought contest where everything is allowed:
        choking, pinning and submission holds.</p>
      <hr/>
      <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>. </p>
    </>
  )
}