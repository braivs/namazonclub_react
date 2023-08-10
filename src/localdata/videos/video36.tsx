import React, {useState} from 'react'
import {Button, Col, Row} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import cn from 'classnames'
import imgMain from 'src/img/videos/41main.jpg'
import {getGalleryForReactPhotoAlbumPhotoesFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import PhotoAlbum from "react-photo-album"
import {LightboxMy} from "../../common/ModdedComponents"
import mainImg from 'src/img/videos/36main.jpg'

const images = require.context('src/img/videos/36', false)

export const Video36 = () => {
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)

    const photos = getGalleryForReactPhotoAlbumPhotoesFromRequire(images)
    const slides = photos.map(({src}) => ({
        src
    }))

    return (
        <>
            <h3>VIDEO 36</h3>
            <h4>Female submission grappling tournament between beginners. <u>Preliminary fights</u>.<br/>
                Weight class: 145 to 160 lb. May, 2014</h4>
            <p>
                In this competition participate five fighters: Christina (67.4 kg / 148.6 lb), Daria (66.5 kg / 146.6
                lb), Irina (70.7 kg / 155.9 lb), Nina (66.1 kg / 145.7 lb) and Victoria (70.7 kg / 155.9 lb). Rules:
                fights with submissions or pins counted to 10.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>
                All the girls except Victoria Vardugina, who has already wrestled once before in the Namazon Club, are
                beginners in submission grappling and participate for the first time here in the competition with
                us.<br/>
                About a half a year ago, in October 2013, Vika won a women's crossfit wrestling !!!ADD LINK HERE!!!
                competition in our club by bringing an uncompromising wrestler
                Lidiya Oslopovskih to submission in the final fight. Vika is a physically strong young woman who not
                only learns how to wrestle, but also competes successfully in college arm wrestling tournaments.
            </p>
            <p>
                Our competition today is notable for a typically FEMALE wrestling. The rules require the winner of a
                match to win at least 2 rounds out of 3. Each round has 4 minutes of time limit.<br/>
                The video includes three matches, the first two ones of which consist of two rounds and the last one
                (Vika vs Christina) goes three rounds.
            </p>
            <Button variant="primary" onClick={() => setOpen(!open)}>SCREENSHOTS</Button>
            <Collapse in={open}>
                <PhotoAlbum layout="masonry" photos={photos} onClick={({index}) => setIndex(index)}/>
            </Collapse>
            <LightboxMy slides={slides} index={index} close={() => setIndex(-1)}/>
            <p>We recommend you to watch this movie (Video 36) if you like to see some ambitious, athletic girls with
                beautiful bodies competing with each other in a hard-fought contest where everything is allowed:
                choking, pinning and submission holds.</p>
            <hr/>
            <p>You can buy <b>VIDEO 36</b> on <a href='https://gumroad.com/namazonclub'>Gumroad</a>. </p>
        </>
    )
}

// todo: add link to crossfit wrestling