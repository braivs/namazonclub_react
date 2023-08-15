import React, {useState} from 'react'
import {Button} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"
import mainImg from 'src/img/videos/02main.jpg'

const images = require.context('src/img/videos/02', false)

export const Video02 = () => {
    const videoNumber = 2
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = photos.map(({src}) => ({src}))

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Submission Grappling. Tournament. Part 2. June, 2010</h4>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>
                This is the continuation of the movie 1. It features all the matches of the second round.<br/>
                Here you can see another aggressive fight between the two favorites: <b>Tais</b> (5'7" / 128 lb) and <b>Maria
                Rylyova</b> (5'7" / 126 lb). And especially dramatic were the fights of <b>Nadezhda Akhmerova</b> (5'6"
                / 128 lb). Thus, in the struggle with Tais, Nadezhda was knocked down… however, she managed to continue
                the match.<br/>
                In the fight with Maria, Nadezhda gave her a hell of a struggle. The advantage shifted back and forth
                between the two girls.
            </p>
            <p>If you want to see all this and are interested to know the final result, watch the film!</p>
            <Button variant="primary" onClick={() => setOpen(!open)}>SCREENSHOTS</Button>
            <Collapse in={open}>
                <PhotoAlbumMy layout="masonry" photos={photos} openCallback={setIndex}/>
            </Collapse>
            <LightboxMy slides={slides} index={index} closeCallback={setIndex}/>
            <hr/>
            <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
        </>
    )
}

//todo: this is not mixed part of tournament, maybe rename