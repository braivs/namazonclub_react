import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/videos/main/18main.jpg'
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/videos/18/mma-sportivnyj-prazdnik-2012-1', false)
const images2 = require.context('src/img/videos/18/mma-sportivnyj-prazdnik-2012-2', false)

export const Video18 = () => {
    const videoNumber = 18

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
            <h4>MMA. Kara Teller vs Darya Balina and Tais. May, 2012</h4>
            <p>
                The first match is between the experienced fighter <b>Kara Teller</b> (Moscow, 5’7” / 119 lb) and the
                newcomer <b>Darya Balina</b> (St. Petersburg, 5’4” / 124 lb). Almost the whole fight is fought standing
                up where Kara clearly dominates. Darya turns out to be very strong and holds out for nearly two rounds.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>The second fight (Kara Teller vs Tais), unlike the first one, consists of mainly mat wrestling. For two
                rounds Tais struggles to win the fight with a chokehold or submission lock, occasionally taking hits
                from her opponent. The final result is quite surprising.</p>
            <h5><u>ММА</u> Darya Balina vs Kara Teller</h5>
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
            <hr/>
            <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
        </>
    )
}