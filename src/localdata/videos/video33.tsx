import React, {useState} from 'react'
import {Button} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"
import mainImg from 'src/img/videos/main/33main.jpg'

const images = require.context('src/img/videos/33/lida-vika', false)
const images2 = require.context('src/img/videos/33/tais-yulia', false)

export const Video33 = () => {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [index, setIndex] = useState(-1)
    const [index2, setIndex2] = useState(-1)

    const photos = getGalleryPhotosFromRequire(images)
    const photos2 = getGalleryPhotosFromRequire(images2)
    const slides = photos.map(({src}) => ({src}))
    const slides2 = photos2.map(({src}) => ({src}))

    return (
        <>
            <h3>VIDEO 33</h3>
            <h4>Crossfit tournament. Submission Grappling. October, 2013</h4>
            <p>
                This video features two submission grappling matches which were held as the final part of a Crossfit
                tournament organized by the St. Petersburg Athletic Center in cooperation with the Namazon Club.<br/>
                The matches were to determine the winners in the two weight categories: up to 70 kg / 155 lb between <b>Lidia
                Oslopovskih</b> (53 kg / 117 lb) and <b>Victoria Vardugina</b> (69 kg / 152 lb) and in the absolute
                category between <b>Yulia Borovik</b> (91 kg / 201 lb) and <b>Tais</b> (61 kg / 135 lb).
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>In spite of the significant weight difference between the opponents in each pair, their struggle on the
                mat was strenuous, entertaining and exciting. The girls fought hard and bravely to win this last
                decisive part of the tournament.</p>
            <h5>Lidia Oslopovskih vs Victoria Vardugina</h5>
            <Button variant="primary" onClick={() => setOpen(!open)}>SCREENSHOTS</Button>
            <Collapse in={open}>
                <PhotoAlbumMy layout="masonry" photos={photos} openCallback={setIndex}/>
            </Collapse>
            <LightboxMy slides={slides} index={index} closeCallback={setIndex}/>
            <h5>Yulia Borovik vs Tais</h5>
            <Button variant="primary" onClick={() => setOpen2(!open2)}>SCREENSHOTS</Button>
            <Collapse in={open2}>
                <PhotoAlbumMy layout="masonry" photos={photos2} openCallback={setIndex2}/>
            </Collapse>
            <LightboxMy slides={slides2} index={index2} closeCallback={setIndex2}/>
            <hr/>
            <p>You can buy <b>VIDEO 33</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
        </>
    )
}