import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/video/main/14main.jpg'
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/video/14/smeshannyj-plyazhnyj-turnir-2011-4', false)
const images2 = require.context('src/img/video/14/smeshannyj-plyazhnyj-turnir-2011-5', false)

export const Video14 = () => {
    const videoNumber = 14

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
            <h4>Two men against one woman. Mixed wrestling on a beach. Part 1. 2011</h4>
            <p>
                Two men against one woman. Mixed wrestling. Part 1. 2011<br/>
                This video features a short improvised mixed wrestling tournament that was held on one of the beaches of
                St. Petersburg. The men were represented by <b>Alex</b> (5’9” / 154 lb) and <b>Villian</b> (5'8” / 177
                lb). The female fighter was <b>Tais</b> (5’7” / 130 lb), the strongest girl of the Namazon Club. The
                competition was organized in two rounds.<br/>
                In the 1st part of the video series you will be able to see two short male and four mixed fights.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>
                If you like sporting mixed wrestling (in a submission grappling style) on a beach, then you will have to
                love our film. Purchase it if you want to see mixed fights with a strong and skilled female wrestler!
            </p>
            <h5>Tais vs Alex</h5>
            <ButtonGallery
                index={index}
                indexCallback={setIndex}
                isOpen={open}
                openCloseCallback={setOpen}
                photos={photos}
                slides={slides}
            />
            <h5>Tais vs Villian</h5>
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