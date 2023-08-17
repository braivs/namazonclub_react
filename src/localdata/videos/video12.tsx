import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/videos/main/12main.jpg'
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/videos/12', false)

export const Video12 = () => {
    const videoNumber = 12

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)
    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Submission Grappling. Tournament. April, 2010</h4>
            <p>
                Two new girls - <b>Elena Vasilyeva</b> (5'6" / 135 lb) and <b>Irina (Vlasta)</b> (5’9’’ / 154 lb) - took
                part in the beach wrestling tournament alongside with <b>Tais</b> (5’7” / 130 lb). Elena is specialized
                in submission grappling, judo and armwrestling and Irina in submission grappling, muay thai and pole
                dancing.<br/>
                The tournament was held in two rounds. The fights had no time limit. Especially tough and hard was the
                struggle for the 2nd place between the newcomers. Young and skilled Elena fought bravely against older
                Irina.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>However, how the fights between our favorites ended up, who and how won, you will know if you watch our
                film.</p>
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