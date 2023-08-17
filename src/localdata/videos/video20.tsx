import React, {useState} from 'react'
import {Row} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import imgMain from 'src/img/videos/main/20main.jpg'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/videos/20/mma-pervaya-nevskaya-arena-2012-1', false)

export const Video20 = () => {
    const videoNumber = 20

    const [index, setIndex] = useState(-1)
    const [open, setOpen] = useState(false)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>MMA. Yulia Fedutenko vs Kara Teller. July, 2012</h4>
            <p><b>Yulia Fedutenko</b> (5'8" / 130 lb) - the mixed martial arts Club "Tibron", St. Petersburg. <b>Kara
                Teller</b> (5'7" / 123 lb) - the Vityaz Club, Moscow. This is the first MMA fight at the "<b>First
                Nevsky Arena Tournament</b>". Both girls are well technically skilled. There is everything in this match
                - hard punches and kicks alternate with a close power struggle.
            </p>
            <img className={sC.videosMainImg} src={imgMain} alt="imgMain"/>
            <p>The girls are fighting three full rounds. Yulia feels more confident in fighting standing up, while Kara
                tries to win the fight on the ground.</p>
            <p>
                If you like hard and uncompromising fights between athletic and attractive women then you will certainly
                like this one.
            </p>
            <ButtonGallery
                index={index}
                indexCallback={setIndex}
                isOpen={open}
                openCloseCallback={setOpen}
                photos={photos}
                slides={slides}
            />
            <Row>
                <hr/>
                <p>You can buy <b>VIDEO {videoNumber}</b> at <a href="https://gumroad.com/namazonclub"> Gumroad </a></p>
            </Row>
        </>
    )
}

// todo: add link