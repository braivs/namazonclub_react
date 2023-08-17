import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/videos/main/30main.jpg'
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/videos/30', false)

export const Video30 = () => {
    const videoNumber = 30

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Mixed Wrestling - the Best Fights. Part 4. 2013</h4>
            <p>
                This is the fourth video of the series titled "Mixed wrestling - the best fights". It features a
                four-and-a-half-minute submission match between two old rivals: Tais (5'7" / 135 lb) and Villian (5'8" /
                177 lb). The fighters know each other very well and are almost equally matched. You can see three rounds
                of hard, aggressive and extremely competitive wrestling on a mat. The advantage shifts back and forth
                between the man and woman in each round.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>The winner is decided at the very end of the fight. Watch the video to find out who it was!</p>
            <ButtonGallery
                index={index}
                indexCallback={setIndex}
                isOpen={open}
                openCloseCallback={setOpen}
                photos={photos}
                slides={slides}
            />
            <hr/>
            <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
        </>
    )
}