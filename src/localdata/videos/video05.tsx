import React, {useState} from 'react'
import {Button} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"
import mainImg from 'src/img/videos/main/05main.jpg'

const images = require.context('src/img/videos/05', false)

export const Video05 = () => {
    const videoNumber = 5
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = photos.map(({src}) => ({src}))

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Villian vs Tais. Mixed Wrestling. 2011</h4>
            <p>This film features a totally new wrestling encounter between <b>Villian</b> and <b>Tais</b> a good light,
                9 rounds of long and arduous wrestling, not fragmented, and all this given in HD quality with an
                optimized file size! <b>Villian</b> (5'8" / 177 lb) is a friend of our club and constant sparring
                partner of our girls. <b>Tais</b> (5'7" / 132 lb) is the strongest girl of the Namazon Club.</p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>
                This is the first video of our NEW SERIES of mixed matches. We represent only real mixed wrestling, no
                giveaway. The battle of the sexes to the victory!
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