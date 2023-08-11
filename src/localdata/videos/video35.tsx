import React, {useState} from 'react'
import {Button} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import {getGalleryForReactPhotoAlbumPhotoesFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"
import mainImg from 'src/img/videos/35main.jpg'

const images = require.context('src/img/videos/35', false)

export const Video35 = () => {
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)

    const photos = getGalleryForReactPhotoAlbumPhotoesFromRequire(images)
    const slides = photos.map(({src}) => ({src}))

    return (
        <>
            <h3>VIDEO 35</h3>
            <h4>Pins matches. Lidiya Oslopovskih, a newcomer in the Namazon Club's wrestling competitions. 2013</h4>
            <p>
                Lovely young lady, <b>Lidiya Oslopovskih</b> (53 kg / 117 lbs), is a newcomer to the Namazon wrestling
                competitions. She is a small but agile fighter, with a very well built body. In this video you can see
                her three fights with the strongest and most experienced woman of the club, <b>Tais</b> (60 кг / 132
                lb).
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>
                It’s somewhat interesting and exciting to watch the way how Lidiya struggles, especially on the ground.
                The rules required the opponents to wrestle to submission only, regardless if one wrestler would pin the
                other to submission or use another move. This time Tais decided to use a little "naughty" tactic for
                success.
            </p>
            <p>
                If you like to watch competitive mat wrestling between two strong and fit women and if you like to see
                some long pin holds, as well as some hard attempts of the bottom lady to bridge out of these pins, then
                this video is highly recommended for you.
            </p>
            <Button variant="primary" onClick={() => setOpen(!open)}>SCREENSHOTS</Button>
            <Collapse in={open}>
                <PhotoAlbumMy layout="masonry" photos={photos} openSetState={setIndex}/>
            </Collapse>
            <LightboxMy slides={slides} index={index} closeSetState={setIndex}/>
            <hr/>
            <p>You can buy <b>VIDEO 35</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>. </p>
        </>
    )
}

// todo: add link to crossfit wrestling