import React, {useState} from 'react'
import img1 from 'src/img/competitions/2016/Shrove_Tuesday/armwrestling/1.jpg'
import sC from 'src/common/styles.module.scss'
import {Button} from "react-bootstrap"
import {Collapse} from "@mui/material"
import {getGalleryPhotosFromRequire} from "../../../common/helpers"
import {LightboxMy, PhotoAlbumMy} from "../../../common/ModdedComponents/ModdedComponents"

const images = require.context('src/img/competitions/2016/Shrove_Tuesday/armwrestling/', false)
const images2 = require.context('src/img/competitions/2016/Shrove_Tuesday/wrestling/', false)

export const Maslenitsa2016 = () => {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [index, setIndex] = useState(-1)
  const [index2, setIndex2] = useState(-1)

  const photos = getGalleryPhotosFromRequire(images)
  const slides = photos.map(({src}) => ({src}))

  const photos2 = getGalleryPhotosFromRequire(images2)
  const slides2 = photos2.map(({src}) => ({src}))

  return (
    <>
      <h4>Female power competitions for the Maslenitsa Festival, 2016</h4>
      <img className={sC.videosMainImg} src={img1} alt=""/>
      <p>The female power competition for this year's Maslenitsa Festival took place at the Namazon Club on Thursday,
        March 10th. The event featured three categories: arm wrestling, leg wrestling, and pins-and-submissions
        wrestling, where a wrestler could win by either submission or pin. There were three participants, all
        competing in the same weight category - up to 60 kg:</p>
      <ul>
        <li>Viktoria Vardugina - a well-known arm wrestler with numerous victories in combative sports competitions at
          the Namazon Club;
        </li>
        <li>Viktoria Smorodina - an ambitious fighter specializing in Wushu, boxing, and powerlifting;</li>
        <li>Oxana Grigorenko - the Namazon Club representative.</li>
      </ul>
      <p>Viktoria Vardugina emerged as the winner in the arm wrestling category, confidently defeating both opponents
        in left and right-hand matches.</p>
      <Button variant="primary" onClick={() => setOpen(!open)}>Arm wrestling photos</Button>
      <Collapse in={open}>
        <PhotoAlbumMy photos={photos} openCallback={setIndex}/>
        <LightboxMy slides={slides} index={index} closeCallback={setIndex}/>
      </Collapse>
      <p>In the leg-wrestling contest, Viktoria Vardugina and Oxana Grigorenko shared the 1st and 2nd places.</p>
      <p>The pins-and-submission matches were the most thrilling part of the competition. Each participant wrestled
        against each other, with victories achieved by holding an opponent in a pin for a count of 7 or forcing her
        into submission. The time limit for each match was 5 minutes. Oxana Grigorenko was the absolute winner of this
        category. Viktoria Smorodina, who proved to be a strong competitor, secured the 2nd place.</p>
      <Button variant="primary" onClick={() => setOpen2(!open2)}>Wrestling photos</Button>
      <Collapse in={open2}>
        <PhotoAlbumMy photos={photos2} openCallback={setIndex2}/>
        <LightboxMy slides={slides2} index={index2} closeCallback={setIndex2}/>
      </Collapse>
      <p>Overall, it was an interesting sporting event. Despite the small number of participants, their high fitness
        and wrestling skills made up for it.</p>
    </>
  )
}