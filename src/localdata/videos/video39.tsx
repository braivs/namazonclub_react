import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/videos/main/39main.jpg'
import {ButtonGallery} from "../../common/common"
import {NavLink} from "react-router-dom"

const images = require.context('src/img/videos/39', false)

export const Video39 = () => {
    const videoNumber = 39

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Mixed wrestling. Villian vs Tais. Part 1. 2014</h4>
            <p>
                In comparison with Alexandr whom you can see on our <NavLink to="/universe/videos/38">VIDEO
                38</NavLink>, <b>Villian</b> doesn’t look so big and strong. He weighs only 180 pounds. But he is
                much faster
                and far more experienced and skilled in wrestling. In their personal fights with each other Villian
                usually comes out a winner. However, <b>Tais</b> who is 44 lb lighter than Villian says that it’s easier
                for her to fight Villian than Alexandr because in her fights against him she is better able to
                successfully apply her technique.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>
                This video features six competitive fights. They were all real! You can judge by the screens below how
                intense the fights were and how uncompromised the struggle in them was. If you like competitive mixed
                wrestling, then the <b>VIDEO 39</b> is also for you.
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