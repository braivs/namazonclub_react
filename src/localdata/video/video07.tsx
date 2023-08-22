import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/video/main/07main.jpg'
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/video/07', false)

export const Video07 = () => {
    const videoNumber = 7

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)
    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Gray Wolf (Alex) vs Red Riding Hood (Tais). Extreme fight in cold weather. April 2011</h4>
            <p><b>Alex</b> (5'7" / 150 lb) hadn’t forgotten the loss to <b>Tais</b> (5'7" / 128 lb) in their previous
                beach wrestling match (<b>Video 3</b>), and now having a transit stay in St. Petersburg, he tried to
                take every opportunity to rematch. He hadn't enough time to go to the sports hall, so it was decided to
                hold the rematch just in the forest on the lake shore.<br/>
                There was a strong cold wind blowing on the shore. Tais came there wearing a red cap …
            </p>
            <p>
                Who eventually won the fight between the modern Little Red Cap and Gray Wolf? Watch our film and find
                out! If you like sporting mixed wrestling, then this film is for you.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
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