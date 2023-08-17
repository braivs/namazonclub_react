import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/videos/main/23main.jpg'
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/videos/23', false)

export const Video23 = () => {
    const videoNumber = 23
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Irina (Vlasta) vs Tais. Submission Grappling. May, 2011</h4>
            <p>
                <b>Irina</b> (5’9” / 154 lb) s a strong young athlete engaged in Muay Thai and pole dancing, but she is
                still a newcomer in her wrestling matches in the Namazon Club’s tournaments. <b>Tais</b> (5’7” / 130 lb)
                is a well-known, strong and skilled lady who is specialized in Submission Grappling and ММА.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>In this competitive match Irina, using her height and weight advantage, tried to force her experienced
                opponent into a hard body-to-body fight. You will see what came out of it if you watch our video.</p>
            <p>
                If you like real female wrestling and want to see two trained women struggling hard against each other
                in a competitive ground fight, then this video is just for you.
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