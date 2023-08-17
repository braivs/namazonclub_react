import React, {useState} from 'react'
import {Button} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"
import mainImg from 'src/img/videos/main/11main.jpg'

const images = require.context('src/img/videos/11', false)

export const Video11 = () => {
    const videoNumber = 11
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = photos.map(({src}) => ({src}))

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Alex vs Elena Vasilyeva (Gladiatriks), Mixed Beach Wrestling. July, 2011</h4>
            <p>
                Alex vs Elena Vasilyeva. Mixed Beach Wrestling. July, 2011<br/>
                This film features two fights for the 3rd place between <b>Elena Vasilyeva</b> (5’6” / 135 lb)
                and <b>Alex</b> (5’9” / 154 lb), which have been held as part of the mixed wrestling tournament (St.
                Petersburg, July 2011). Each individual fight had no time limit, according to the rules of the
                tournament.<br/>
                The struggle between Elena and Alex proved to be extremely hard and exhausting. Suffice it to say that
                their first fight lasted more than 12 minutes.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>
                If you like sporting mixed wrestling, where there are choke holds, body scissors and head scissors, then
                we believe you will love our film. Watch our film and you will know who - <b>Elena</b> or <b>Alex</b> -
                took the 3rd place in this mixed tournament.
            </p>
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