import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/video/main/16main.jpg'
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/video/16', false)

export const Video16 = () => {
    const videoNumber = 16
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Elena Vasilyeva vs Tais. Submission Grappling. Youth vs Experience. June, 2011</h4>
            <p>
                <b>Elena Vasilyeva (Gladiatriks)</b> (5'6" / 135 lb) - submission grappling, MMA, judo and arm
                wrestling. <b>Tais</b> (5'7" / 130 lb) - submission grappling, MMA. To win in this competition, the
                girls needed not only physical strength and wrestling skill but also a lot of endurance.<br/>
                The fight consisted of 9 rounds, where each one had no time limit and lasted until there was a clear
                winner. And between each round, the fighters had only 1 minute to rest.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>Each round was fought hard and aggressively, the girls giving all their strength to win the battle.</p>
            <p>
                Which one of the girls was more exhausted? And who was the winner in the end? You can know it if you
                purchase our film.
            </p>
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