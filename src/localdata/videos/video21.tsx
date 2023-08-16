import React, {useState} from 'react'
import {Button, Col, Row} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import cn from 'classnames'
import imgMain from 'src/img/videos/21main.jpg'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"

const images = require.context('src/img/videos/21/mma-pervaya-nevskaya-arena-2012-2', false)

export const Video21 = () => {
    const videoNumber = 21
    const [index, setIndex] = useState(-1)
    const [open, setOpen] = useState(false)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = photos.map(({src}) => ({src}))

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>MMA. Darya Balina vs Olga. July, 2012</h4>
            <p>This is the second MMA fight at the <b>"First Nevsky Arena Tournament"</b>. <b>Darya Balina</b> (5'4" /
                124 lb) and <b>Olga</b> (5'7" / 139 lb) are young participants, who don't have yet enough experience in
                MMA fights, but that doesn't make their fight less interesting or entertaining; their punches are still
                strong, the struggle is tough.
            </p>
            <img className={sC.videosMainImg} src={imgMain} alt="imgMain"/>
            <p>The girls are fighting three full rounds, and no one of them wants to give up.</p>
            <p>
                If you don't like fights with a great amount of punches and kicks then you might perhaps be a little bit
                disappointed when watching this fight. However, if you love real, hard, uncompromising fights then
                you’ll definitely like their match.
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