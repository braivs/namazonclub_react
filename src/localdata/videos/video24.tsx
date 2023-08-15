import React, {useState} from 'react'
import {Button} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"
import mainImg from 'src/img/videos/24main.jpg'

const images = require.context('src/img/videos/24', false)

export const Video24 = () => {
    const videoNumber = 24
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = photos.map(({src}) => ({src}))

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Lyudmila vs Tais. Submission Grappling. October, 2011</h4>
            <p>
                <b>Lyudmila</b> (5’11” / 154 lb) is a strong sportswoman engaged in Muay Thai, but she is a newcomer in
                our Club’s competitions, while <b>Tais</b> (5’7” / 130 lb) is a repeat winner at the competitions,
                specializing in Submission Grappling and MMA.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>As you can see, Lyudmila is much heavier and taller than Tais. In this match, the girls wrestled three
                rounds. Lyudmila managed to place Tais in a very difficult position at the beginning of the first
                round.</p>
            <p>
                Watch the video and you will see what followed and how it all ended. If you like real mat wrestling
                between some of the fittest and beautiful women then this video is for you.
            </p>
            <Button variant="primary" onClick={() => setOpen(!open)}>SCREENSHOTS</Button>
            <Collapse in={open}>
                <PhotoAlbumMy layout="masonry" photos={photos} openSetState={setIndex}/>
            </Collapse>
            <LightboxMy slides={slides} index={index} closeSetState={setIndex}/>
            <hr/>
            <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
        </>
    )
}