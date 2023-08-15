import React, {useState} from 'react'
import {Button} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"
import mainImg from 'src/img/videos/08main.jpg'

const images = require.context('src/img/videos/08/1', false)
const images2 = require.context('src/img/videos/08/plyazhnyj-turnir-2011-2', false)
const images3 = require.context('src/img/videos/08/plyazhnyj-turnir-2011-3', false)

export const Video08 = () => {
    const videoNumber = 8
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
            <h4>Beach Tournament. Submission Grappling. June, 2011</h4>
            <p>
                Two new girls - <b>Elena Vasilyeva</b> (5'6" / 135 lb) and <b>Irina (Vlasta)</b> (5’9’’ / 154 lb) - took
                part in the beach wrestling tournament alongside with <b>Tais</b> (5’7” / 130 lb). Elena is specialized
                in submission grappling, judo and armwrestling and Irina in submission grappling, muay thai and pole
                dancing.<br/>
                The tournament was held in two rounds. The fights had no time limit. Especially tough and hard was the
                struggle for the 2nd place between the newcomers. Young and skilled Elena fought bravely against older
                Irina.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>If you like female wrestling not only indoors, but under the open sky as well, this film will suit you.</p>
            <h5>Elena Vasilyeva  vs  Tais</h5>
            <Button variant="primary" onClick={() => setOpen(!open)}>SCREENSHOTS</Button>
            <Collapse in={open}>
                <PhotoAlbumMy layout="masonry" photos={photos} openSetState={setIndex}/>
            </Collapse>
            <LightboxMy slides={slides} index={index} closeSetState={setIndex}/>
            <h5>Irina (Vlasta)  vs  Tais</h5>
            <Button variant="primary" onClick={() => setOpen2(!open2)}>SCREENSHOTS</Button>
            <Collapse in={open2}>
                <PhotoAlbumMy layout="masonry" photos={photos2} openSetState={setIndex2}/>
            </Collapse>
            <LightboxMy slides={slides2} index={index2} closeSetState={setIndex2}/>
            <h5>Elena Vasilyeva  vs  Irina (Vlasta)</h5>
            <Button variant="primary" onClick={() => setOpen3(!open3)}>SCREENSHOTS</Button>
            <Collapse in={open3}>
                <PhotoAlbumMy layout="masonry" photos={photos3} openSetState={setIndex3}/>
            </Collapse>
            <LightboxMy slides={slides3} index={index3} closeSetState={setIndex3}/>
            <hr/>
            <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
        </>
    )
}