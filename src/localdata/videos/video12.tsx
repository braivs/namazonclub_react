import React, {useState} from 'react'
import {Button} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"
import mainImg from 'src/img/videos/12main.jpg'

const images = require.context('src/img/videos/12', false)

export const Video12 = () => {
    const videoNumber = 12
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = photos.map(({src}) => ({src}))

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Submission Grappling. Tournament. April, 2010</h4>
            <p>
                This film is a video report from the Submission Grappling tournament (April 2010), where
                participated <b>Natalia Mysik</b> (5'11" / 154 lb), <b>Maria Rylyova</b> (5'8" / 126 lb) and Valentina
                Perfilyeva (5'8" / 132 lb). The wrestlers were of different weight categories. In a manner of speaking,
                it was a club competition in the total weight category.<br/>
                Natalia was one of the favorites in the tournament (as the heaviest wrestler). Another favorite was
                Maria (as the most skilled). There was a fine struggle between Maria and Valentina, who were near
                equally matched. Natalia showed some superiority over Valentina in the fights against her.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>However, how the fights between our favorites ended up, who and how won, you will know if you watch our film.</p>
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