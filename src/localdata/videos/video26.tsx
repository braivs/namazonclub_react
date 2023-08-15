import React, {useState} from 'react'
import {Button} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"
import mainImg from 'src/img/videos/26main.jpg'

const images = require.context('src/img/videos/26', false)

export const Video26 = () => {
    const videoNumber = 26
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = photos.map(({src}) => ({src}))

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Female Beach Wrestling. Part 1. June, 2011</h4>
            <p>
                This video features a sand-wrestling contest between two ambitious women, <b>Tais</b> (5'7" / 130 lb)
                and <b>Elena Vasilyeva</b> (5'6" / 134 lb). Tais, who has competed in various grappling and MMA
                tournaments, has more experience than her younger opponent. But Elena is not a pushover either. She’s
                also taken part in
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>The two women fought nine rounds with submission grappling rules. It was an interesting and exciting
                wrestling match with a lot of different pins, chokes and submission holds. The both wrestlers struggled
                arduously for every single point. The weaker woman didn’t give up easily.</p>
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