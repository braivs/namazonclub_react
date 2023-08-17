import React, {useState} from 'react'
import {Button} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"
import mainImg from 'src/img/videos/main/03MixMain.jpg'

const images = require.context('src/img/videos/03mix/wm1', false)
const images2 = require.context('src/img/videos/03mix/wm2', false)

export const Video03wm = () => {
    const videoNumber = 3
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = photos.map(({src}) => ({src}))

    const [open2, setOpen2] = useState(false)
    const [index2, setIndex2] = useState(-1)
    const photos2 = getGalleryPhotosFromRequire(images2)
    const slides2 = photos2.map(({src}) => ({src}))

    return (
        <>
            <h3>VIDEO 3wm</h3>
            <h4>Beach Wrestling. Mixed Tournament. Two girls vs one man. September, 2010</h4>
            <p>
                <b>Alex</b> came to St. Petersburg at the weekend and offered Tais (5'7" / 132 lb) and <b>Natalia
                Mysik</b> (5'11" / 154 lb) to hold a mixed tournament on beach wrestling. He had been practicing
                wrestling a lot recently, and had become physically stronger - 5'9" / 150 lb, which allowed him to count
                on a successful performance.
            </p>
            <p>The mixed beach tournament went in three rounds. The fights between the girls were hard enough,
                especially in the first two rounds. The mixed contests started with Alex’s convincing win over Natalia .
                Then the luck turned away from Alex ...</p>
            <p>If you like <b>mixed competitive wrestling</b>, then we believe you will love our film. Watch how
                everything was!</p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <h5>Natalia Mysik  vs  Alex </h5>
            <Button variant="primary" onClick={() => setOpen(!open)}>SCREENSHOTS</Button>
            <Collapse in={open}>
                <PhotoAlbumMy layout="masonry" photos={photos} openCallback={setIndex}/>
            </Collapse>
            <LightboxMy slides={slides} index={index} closeCallback={setIndex}/>
            <hr/>
            <h5>Alex  vs  Tais</h5>
            <Button variant="primary" onClick={() => setOpen2(!open2)}>SCREENSHOTS</Button>
            <Collapse in={open2}>
                <PhotoAlbumMy layout="masonry" photos={photos2} openCallback={setIndex2}/>
            </Collapse>
            <LightboxMy slides={slides2} index={index2} closeCallback={setIndex2}/>
            <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
        </>
    )
}