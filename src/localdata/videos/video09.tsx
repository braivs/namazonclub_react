import React, {useState} from 'react'
import {Button} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"
import mainImg from 'src/img/videos/main/09main.jpg'

const images = require.context('src/img/videos/09/mma-rozhdestvenskij-kubok-2012-1', false)
const images2 = require.context('src/img/videos/09/mma-rozhdestvenskij-kubok-2012-3', false)
const images3 = require.context('src/img/videos/09/mma-rozhdestvenskij-kubok-2012-4', false)

export const Video09 = () => {
    const videoNumber = 9
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [index, setIndex] = useState(-1)
    const [index2, setIndex2] = useState(-1)
    const [index3, setIndex3] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const photos2 = getGalleryPhotosFromRequire(images2)
    const photos3 = getGalleryPhotosFromRequire(images3)
    const slides = photos.map(({src}) => ({src}))
    const slides2 = photos2.map(({src}) => ({src}))
    const slides3 = photos3.map(({src}) => ({src}))

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>MMA tournament "Christmas Cup 2012"</h4>
            <p>
                In this tournament participated three fighters: <b>Elena Vasilyeva</b> (St. Petersburg, 5’6” / 132
                lb), <b>Kara Teller</b>, Namazon Club’s newcomer (Moscow, 5’7” / 119 lb), Tais (St. Petersburg, 5’7” /
                130 lb). The tournament was held in one round. So eventually, the girls had to have two fights each.
                Each fight consisted of three 4 minute rounds with 1 minute rest between each round.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>The girls fought hard and uncompromisingly in all the three fights.</p>
            <p>If you like competitive fights where there are strikes with arms and legs as well as wrestling with
                armlocks and chokes, then you will have to love our film.</p>
            <h5><u>First fight</u>  Elena Vasilyeva vs Kara Teller</h5>
            <Button variant="primary" onClick={() => setOpen(!open)}>SCREENSHOTS</Button>
            <Collapse in={open}>
                <PhotoAlbumMy layout="masonry" photos={photos} openCallback={setIndex}/>
            </Collapse>
            <LightboxMy slides={slides} index={index} closeCallback={setIndex}/>
            <h5><u>Second fight</u> Kara Teller vs Tais</h5>
            <Button variant="primary" onClick={() => setOpen2(!open2)}>SCREENSHOTS</Button>
            <Collapse in={open2}>
                <PhotoAlbumMy layout="masonry" photos={photos2} openCallback={setIndex2}/>
            </Collapse>
            <LightboxMy slides={slides2} index={index2} closeCallback={setIndex2}/>
            <h5><u>Second fight</u> Elena Vasilyeva vs Tais</h5>
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