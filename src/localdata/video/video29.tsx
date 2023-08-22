import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import mainImg from 'src/img/video/main/29main.jpg'
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/video/29', false)

export const Video29 = () => {
    const videoNumber = 8

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)

    const photos = getGalleryPhotosFromRequire(images)
    const slides = photos.map(({src}) => ({src}))

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Elena Vasilyeva vs Tais. Submission Grappling. June, 2013</h4>
            <p>
                <b>Elena</b> (5'7" / 157 lb) is a strong and ambitious young woman. She has fought <b>Tais</b> (5'7" /
                130 lb) many times, two years ago, but then she disappeared from the Club. Now she’s back again,
                stronger, heavier and more skillful and confident than ever.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>From the very first minute it is clear that she wants to give a real fight to her experienced rival.
                Although Tais is a very strong lady, she’s immediately in trouble against aggressive Elena. And after 15
                minutes of intense wrestling, she is forced to admit her defeat.<br/>
                For the first time, Tais loses a competitive submission match to Elena.
            </p>
            <p>If you are curious to see how it happened, watch this video.</p>
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