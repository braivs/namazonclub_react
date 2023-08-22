import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/video/main/17main.jpg'
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/video/17/mma-kara-svetlany-2012-1', false)
const images2 = require.context('src/img/video/17/mma-kara-svetlany-2012-2', false)
const images3 = require.context('src/img/video/17/mma-kara-svetlany-2012-3', false)

export const Video17 = () => {
    const videoNumber = 17

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    const [open2, setOpen2] = useState(false)
    const [index2, setIndex2] = useState(-1)
    const photos2 = getGalleryPhotosFromRequire(images2)
    const slides2 = getSlides(photos2)

    const [open3, setOpen3] = useState(false)
    const [index3, setIndex3] = useState(-1)
    const photos3 = getGalleryPhotosFromRequire(images3)
    const slides3 = getSlides(photos3)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>MMA and Submission Grappling. February, 2012</h4>
            <p>
                Our video features two ММА fights: <b>Kara Teller</b> (Moscow, 5’7” / 123 lb) vs <b>Tais</b> (St.
                Petersburg, 5’7” / 130 lb) and <b>Kara Teller</b> (Moscow, 5’7” / 119 lb) vs <b>Svetlana
                Solovyeva</b> (St. Petersburg, 5’7” / 123 lb). Kara and Tais could be seen in our previous film (Video
                9), while for Svetlana it was the first MMA fight.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>In the second part of the movie you will be able to see a very tough submission grappling fight between
                Kara and Svetlana Solovyova. Sveta had surpassed her opponent in strength at the time, while Kara in
                this pair had been more experienced and technically skilled. .</p>
            <p>To find out who won, you will have to watch our film.</p>
            <h5><u>MMA</u>  Svetlana Solovyeva vs Kara Teller</h5>
            <ButtonGallery
                index={index}
                indexCallback={setIndex}
                isOpen={open}
                openCloseCallback={setOpen}
                photos={photos}
                slides={slides}
            />
            <h5><u>ММА</u> Kara Teller vs Tais</h5>
            <ButtonGallery
                index={index2}
                indexCallback={setIndex2}
                isOpen={open2}
                openCloseCallback={setOpen2}
                photos={photos2}
                slides={slides2}
            />
            <h5><u>Submission Grappling</u> Svetlana Solovyeva vs Kara Teller</h5>
            <ButtonGallery
                index={index3}
                indexCallback={setIndex3}
                isOpen={open3}
                openCloseCallback={setOpen3}
                photos={photos3}
                slides={slides3}
            />
            <hr/>
            <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
        </>
    )
}