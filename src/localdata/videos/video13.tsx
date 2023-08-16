import React, {useState} from 'react'
import {Button, Col, Row} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import cn from 'classnames'
import imgMain from 'src/img/videos/main/13main.jpg'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"

const images = require.context('src/img/videos/13', false)

export const Video13 = () => {
    const videoNumber = 13
    const [index, setIndex] = useState(-1)
    const [open, setOpen] = useState(false)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = photos.map(({src}) => ({src}))

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Valentina Perfilyeva vs Nadezhda Akhmerova. Kickboxing. 2011</h4>
            <p>In this video you will be able to see two kickboxing fights with low kicks allowed. <b>Valentina
                Perfilyev</b>a (5'8" / 132 lb) is specialized in karate (kumite), while <b>Nadezhda Akhmerova</b> (5'6"
                / 128 lb) goes in for kickboxing.
            </p>
            <img className={sC.videosMainImg} src={imgMain} alt="imgMain"/>
            <p>
                Both fights were hard and uncompromising, with the girls kicking and punching each other aggressively,
                exchanging strikes, a lot of which were accurate and strong.<br/>
                If you like kickboxing, then you will possibly love this film. Watch it and you will know which girl and
                how won in the end.
            </p>
            <Button variant="primary" onClick={() => setOpen(!open)}>SCREENSHOTS</Button>
            <Collapse in={open}>
                <PhotoAlbumMy photos={photos} openCallback={setIndex}/>
            </Collapse>
            <LightboxMy slides={slides} index={index} closeCallback={setIndex}/>
            <Row>
                <hr/>
                <p>You can buy <b>VIDEO {videoNumber}</b> at <a href="https://gumroad.com/namazonclub"> Gumroad </a></p>
            </Row>
        </>
    )
}