import React, {useState} from 'react'
import {Button} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"
import mainImg from 'src/img/videos/main/22main.jpg'

const images = require.context('src/img/videos/22', false)

export const Video22 = () => {
    const videoNumber = 22
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = photos.map(({src}) => ({src}))

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Irina and Elena Vasilyeva vs Villian. Mixed Wrestling. 2011</h4>
            <p>
                In these wrestling matches <b>Villian</b> (5’8” / 177 lb) takes on two experienced women (though not
                both at once but one after the other). <b>Irina</b> (5’9” / 154 lb) is a strong woman and she’s been
                engaged in Muay Thai and pole dancing. <b>Elena</b> (5’6” / 135 lb), the youngest one of the three
                participants, is a talented and very ambitious fighter. She’s had a lot of good performances in
                armwrestling, submission grappling and MMA competitions.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>If you like mixed wrestling and want to enjoy some competitive mixed wrestling matches fought in a
                submission grappling style then this video is for you.</p>
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