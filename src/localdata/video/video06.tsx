import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/video/main/23main.jpg'
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/video/06', false)

export const Video06 = () => {
    const videoNumber = 6

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)
    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Maria Rylyova vs Tais.Submission Grappling + Armwrestling. March, 2011</h4>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>
                <b>Tais</b> (5’7” / 128 lb) is a numerous winner of Submission Grappling competitions organized by our
                club. <b>Maria Rylyova</b> (5’8” / 126 lb) is a winner of the Namazon Club Championship on Submission
                Grappling in 2010, master of sports in armwrestling.<br/>
                The girls started with an arm wrestling contest with both arms (lying on the floor). There was no
                winner. After that, they continued their competition on the wrestling mat. They fought several rounds in
                submission grappling.
            </p>
            <p>If you like skillful wrestling of approximately equally matched women, you will love this film.</p>
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