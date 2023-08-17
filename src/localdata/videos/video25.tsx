import React, {useState} from 'react'
import {Button} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"
import mainImg from 'src/img/videos/main/25main.jpg'

const images = require.context('src/img/videos/25/villian-elena', false)
const images2 = require.context('src/img/videos/25/villian-lyudmila', false)
const images3 = require.context('src/img/videos/25/villian-tais', false)

export const Video25 = () => {
    const videoNumber = 25
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = photos.map(({src}) => ({src}))

    const [open2, setOpen2] = useState(false)
    const [index2, setIndex2] = useState(-1)
    const photos2 = getGalleryPhotosFromRequire(images2)
    const slides2 = photos2.map(({src}) => ({src}))

    const [open3, setOpen3] = useState(false)
    const [index3, setIndex3] = useState(-1)
    const photos3 = getGalleryPhotosFromRequire(images3)
    const slides3 = photos3.map(({src}) => ({src}))

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Mixed Wrestling - the Best Fights. Part 2. 2011</h4>
            <p>
                This is the second video of the series titled <b>"Mixed wrestling - the best fights"</b>. Here you can
                see <b>Villian</b> (5'7" / 177 lb) wrestle three strong female fighters: <b>Tais</b> (5'7" / 130
                lb), <b>Elena Vasilyeva</b> (5'6" / 135 lb) and <b>Lyudmila</b> (5'11" / 154 lb).<br/>
                Certainly any one of the three ladies could be a real challenge for you! Tall blonde Lyudmila, a
                newcomer in the competitions is engaged in Muay Thai. Strong, ambitious Elena competes successfully in
                armwrestling, submission grappling and MMA. Tais is the strongest and most experienced fighter among
                all.
            </p>
            <p>This video features five submission grappling fights (Tais and Elena wrestled Villian twice). The fights
                take place both in a gym on a mat and outdoors on a sandy beach and on grass. If you like mixed
                wrestling, then don’t miss this video.</p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>If you like mixed wrestling, then don’t miss this video.</p>
            <h5>Villian vs Elena Vasilyeva</h5>
            <Button variant="primary" onClick={() => setOpen(!open)}>SCREENSHOTS</Button>
            <Collapse in={open}>
                <PhotoAlbumMy layout="masonry" photos={photos} openCallback={setIndex}/>
            </Collapse>
            <LightboxMy slides={slides} index={index} closeCallback={setIndex}/>
            <h5>Villian vs Lyudmila</h5>
            <Button variant="primary" onClick={() => setOpen2(!open2)}>SCREENSHOTS</Button>
            <Collapse in={open2}>
                <PhotoAlbumMy layout="masonry" photos={photos2} openCallback={setIndex2}/>
            </Collapse>
            <LightboxMy slides={slides2} index={index2} closeCallback={setIndex2}/>
            <h5>Villian vs Tais</h5>
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

//todo: change main image to multiple, because many fights inside. And look for same in another videos.