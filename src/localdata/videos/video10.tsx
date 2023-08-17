import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/videos/main/10main.jpg'
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/videos/10', false)

export const Video10 = () => {
    const videoNumber = 10

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)
    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Mixed Wrestling - the Best Fights. Part 1. 2011</h4>
            <p>We are beginning a new series titled «Mixed wrestling - the best fights». In the first part of our film
                there are two gyes confronting <b>Tais</b> (5'7" / 128 lb). One of them - <b>Pasha</b> (5'9" / 143 lb) -
                is relatively light and fast. The other - <b>Villian</b> (5'8" / 177 lb) - is heavy (compared with Tais)
                and slow. We have selected, in our view, the most interesting fights of Pasha and Villian against Tais
                on both a mat and a beach
            </p>
            <p>
                If you want to see highly competitive mixed wrestling matches fought in a submission grappling style,
                then watch our film.
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