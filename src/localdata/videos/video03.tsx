import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/videos/main/03main.jpg'
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/videos/03/ww', false)

export const Video03 = () => {
    const videoNumber = 3

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)
    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Beach Wrestling. Mixed Tournament. September, 2010</h4>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>
                Female (Namazonian) wrestlers at the tournament were <b>Tais</b> (5’7” / 132 lb) and <b>Natalia
                Mysik</b> (5’11” / 154 lb). Their male opponent was Alex (5’9” / 150 lb). Namely, due to the three
                fights between Natalia and Tais, <b>VIDEO 3</b> can go in the <b>WRESTLING</b> section of the website,
                where the <b>FEMALE WRESTLING</b> matches are presented.
            </p>
            <p>In these fights the rules were <b>SUBMISSION</b> only, no time limits indicated. This time Tais wrestled
                a woman who was not only heavier than her but physically stronger as well. The struggle was very tough!
                Both women fought in an aggressive manner, trying to gain an upper position and apply a good pin or
                submission hold. Especially dramatic were the first two fights during which the wrestlers struggled
                mostly on wet sand and the advantages were changing.</p>
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

//todo: this is not mixed part of tournament, maybe rename