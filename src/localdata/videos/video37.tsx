import React, {useState} from 'react'
import {Button} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import {getGalleryForReactPhotoAlbumPhotoesFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import PhotoAlbum from "react-photo-album"
import {LightboxMy} from "../../common/ModdedComponents"
import mainImg from 'src/img/videos/37/22.jpg'

const images = require.context('src/img/videos/37', false)

export const Video37 = () => {
    const [open, setOpen] = useState(false)

    const [index, setIndex] = useState(-1)
    const photos = getGalleryForReactPhotoAlbumPhotoesFromRequire(images)

    const slides = photos.map(({src}) => ({
        src
    }))

    return (
        <div className={sC.compArticlesVideos}>
            <h3>VIDEO 37</h3>
            <h4>Female submission grappling tournament between beginners. <u>Final fights</u>.<br/>
                Weight class: 145 to 160 lb. May, 2014</h4>
            <p>
                This video is a continuation of the Video 36 that featured the preliminary fights HERE !!!ADD LINK TO
                VIDEO 36!!!. Now here you can see two final fights in which the loser and the winner of the tournament
                were determined.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>In one of them, Nina and Irina fought with each other for the IV place (for not becoming the outsider),
                and in the other Daria and Victoria decided between themselves who was the best wrestler of the
                competition. The fight Nina vs Irina went fast and ended pretty soon – one of the girls defeated the
                other twice by applying submission holds.</p>
            <p>The final fight was much longer and more strenuous. Suffice it to say that in the first round neither
                wrestler was able to gain a victory within the 4 min of time limit.</p>
            <Button variant="primary" onClick={() => setOpen(!open)}>Nina and Irina SCREENSHOTS</Button>
            <Collapse in={open}>
                <PhotoAlbum layout="masonry" photos={photos} onClick={({index}) => setIndex(index)}/>
            </Collapse>
            <LightboxMy slides={slides} index={index} close={() => setIndex(-1)}/>
            <p>We recommend this video for those of you who like real female wrestling and young sexy-looking girls with
                competitive spirit. You will find it especially entertaining if you are interested to see a fight in
                which one of the two girls grappling on the mat continuously struggles to pin her opponent down and
                finally succeeds after long hard attempts</p>
            <hr/>
            <p>You can buy <b>VIDEO 37</b> on <a href='https://gumroad.com/namazonclub'>Gumroad</a>.</p>
        </div>
    )
}

// todo: add link