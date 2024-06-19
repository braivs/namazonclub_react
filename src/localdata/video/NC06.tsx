import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/video/main/23main.jpg'

import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/video/06', false)

export const NC06 = () => {
  const videoNumber = 6

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)
  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>Maria Rylyova vs Tais. Submission Grappling + Armwrestling. March, 2011</h4>
      <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
      <p>
        <b>Tais</b> (5’7” / 128 lb) is a multiple winner of Submission Grappling competitions organized by our club. <b>Maria
        Rylyova</b> (5’8” / 126 lb) is the winner of the Namazon Club Championship in Submission Grappling in 2010 and a
        master of sports in armwrestling.<br/>
        The competition started with an arm wrestling contest using both arms (lying on the floor), which ended in a
        draw. They then continued their rivalry on the wrestling mat, engaging in several rounds of submission
        grappling.
      </p>
      <p>If you enjoy watching skillful wrestling between women who are evenly matched, you will love this film.</p>
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