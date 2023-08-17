import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/videos/main/33main.jpg'
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/videos/33/lida-vika', false)
const images2 = require.context('src/img/videos/33/tais-yulia', false)

export const Video33 = () => {
    const videoNumber = 33

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    const [open2, setOpen2] = useState(false)
    const [index2, setIndex2] = useState(-1)
    const photos2 = getGalleryPhotosFromRequire(images2)
    const slides2 = getSlides(photos2)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Crossfit tournament. Submission Grappling. October, 2013</h4>
            <p>
                This video features two submission grappling matches which were held as the final part of a Crossfit
                tournament organized by the St. Petersburg Athletic Center in cooperation with the Namazon Club.<br/>
                The matches were to determine the winners in the two weight categories: up to 70 kg / 155 lb between <b>Lidia
                Oslopovskih</b> (53 kg / 117 lb) and <b>Victoria Vardugina</b> (69 kg / 152 lb) and in the absolute
                category between <b>Yulia Borovik</b> (91 kg / 201 lb) and <b>Tais</b> (61 kg / 135 lb).
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>In spite of the significant weight difference between the opponents in each pair, their struggle on the
                mat was strenuous, entertaining and exciting. The girls fought hard and bravely to win this last
                decisive part of the tournament.</p>
            <h5>Lidia Oslopovskih vs Victoria Vardugina</h5>
            <ButtonGallery
                index={index}
                indexCallback={setIndex}
                isOpen={open}
                openCloseCallback={setOpen}
                photos={photos}
                slides={slides}
            />
            <h5>Yulia Borovik vs Tais</h5>
            <ButtonGallery
                index={index2}
                indexCallback={setIndex2}
                isOpen={open2}
                openCloseCallback={setOpen2}
                photos={photos2}
                slides={slides2}
            />
            <hr/>
            <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
        </>
    )
}