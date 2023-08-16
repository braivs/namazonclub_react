import React, {useState} from 'react'
import {Button} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"
import mainImg from 'src/img/videos/main/29main.jpg'

const images = require.context('src/img/videos/29', false)

export const Video29 = () => {
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)

    const photos = getGalleryPhotosFromRequire(images)
    const slides = photos.map(({src}) => ({src}))

    return (
        <>
            <h3>VIDEO 29</h3>
            <h4>Elena Vasilyeva vs Tais. Submission Grappling. June, 2013</h4>
            <p>
                <b>Elena</b> (5'7" / 157 lb) is a strong and ambitious young woman. She has fought <b>Tais</b> (5'7" /
                130 lb) many times, two years ago, but then she disappeared from the Club. Now she’s back again,
                stronger, heavier and more skillful and confident than ever.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>From the very first minute it is clear that she wants to give a real fight to her experienced rival.
                Although Tais is a very strong lady, she’s immediately in trouble against aggressive Elena. And after 15
                minutes of intense wrestling, she is forced to admit her defeat.<br/>
                For the first time, Tais loses a competitive submission match to Elena.
            </p>
            <p>If you are curious to see how it happened, watch this video.</p>
            <Button variant="primary" onClick={() => setOpen(!open)}>SCREENSHOTS</Button>
            <Collapse in={open}>
                <PhotoAlbumMy layout="masonry" photos={photos} openCallback={setIndex}/>
            </Collapse>
            <LightboxMy slides={slides} index={index} closeCallback={setIndex}/>
            <hr/>
            <p>You can buy <b>VIDEO 29</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
        </>
    )
}