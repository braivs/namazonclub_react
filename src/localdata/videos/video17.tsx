import React, {useState} from 'react'
import {Button} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"
import mainImg from 'src/img/videos/17main.jpg'

const images = require.context('src/img/videos/17/mma-kara-svetlany-2012-1', false)
const images2 = require.context('src/img/videos/17/mma-kara-svetlany-2012-2', false)
const images3 = require.context('src/img/videos/17/mma-kara-svetlany-2012-3', false)

export const Video17 = () => {
    const videoNumber = 17
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [index, setIndex] = useState(-1)
    const [index2, setIndex2] = useState(-1)
    const [index3, setIndex3] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const photos2 = getGalleryPhotosFromRequire(images2)
    const photos3 = getGalleryPhotosFromRequire(images3)
    const slides = photos.map(({src}) => ({src}))
    const slides2 = photos2.map(({src}) => ({src}))
    const slides3 = photos3.map(({src}) => ({src}))

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>MMA and Submission Grappling. February, 2012</h4>
            <p>
                Our video features two ММА fights: <b>Kara Teller</b> (Moscow, 5’7” / 123 lb) vs <b>Tais</b> (St.
                Petersburg, 5’7” / 130 lb) and <b>Kara Teller</b> (Moscow, 5’7” / 119 lb) vs <b>Svetlana
                Solovyeva</b> (St. Petersburg, 5’7” / 123 lb). Kara and Tais could be seen in our previous film (Video
                9), while for Svetlana it was the first MMA fight.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>In the second part of the movie you will be able to see a very tough submission grappling fight between
                Kara and Svetlana Solovyova. Sveta had surpassed her opponent in strength at the time, while Kara in
                this pair had been more experienced and technically skilled. .</p>
            <p>To find out who won, you will have to watch our film.</p>
            <h5><u>MMA</u>  Svetlana Solovyeva vs Kara Teller</h5>
            <Button variant="primary" onClick={() => setOpen(!open)}>SCREENSHOTS</Button>
            <Collapse in={open}>
                <PhotoAlbumMy layout="masonry" photos={photos} openCallback={setIndex}/>
            </Collapse>
            <LightboxMy slides={slides} index={index} closeCallback={setIndex}/>
            <h5><u>ММА</u> Kara Teller vs Tais</h5>
            <Button variant="primary" onClick={() => setOpen2(!open2)}>SCREENSHOTS</Button>
            <Collapse in={open2}>
                <PhotoAlbumMy layout="masonry" photos={photos2} openCallback={setIndex2}/>
            </Collapse>
            <LightboxMy slides={slides2} index={index2} closeCallback={setIndex2}/>
            <h5><u>Submission Grappling</u> Svetlana Solovyeva vs Kara Teller</h5>
            <Button variant="primary" onClick={() => setOpen3(!open3)}>SCREENSHOTS</Button>
            <Collapse in={open3}>
                <PhotoAlbumMy layout="masonry" photos={photos3} openCallback={setIndex3}/>
            </Collapse>
            <LightboxMy slides={slides3} index={index3} closeCallback={setIndex3}/>
            <hr/>
            <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
        </>
    )
}