import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/video/main/35main.jpg'
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/video/35', false)

export const Video35 = () => {
    const videoNumber = 35

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)

    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Pins matches. Lidiya Oslopovskih, a newcomer in the Namazon Club's wrestling competitions. 2013</h4>
            <p>
                Lovely young lady, <b>Lidiya Oslopovskih</b> (53 kg / 117 lbs), is a newcomer to the Namazon wrestling
                competitions. She is a small but agile fighter, with a very well built body. In this video you can see
                her three fights with the strongest and most experienced woman of the club, <b>Tais</b> (60 кг / 132
                lb).
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>
                It’s somewhat interesting and exciting to watch the way how Lidiya struggles, especially on the ground.
                The rules required the opponents to wrestle to submission only, regardless if one wrestler would pin the
                other to submission or use another move. This time Tais decided to use a little "naughty" tactic for
                success.
            </p>
            <p>
                If you like to watch competitive mat wrestling between two strong and fit women and if you like to see
                some long pin holds, as well as some hard attempts of the bottom lady to bridge out of these pins, then
                this video is highly recommended for you.
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
            <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>. </p>
        </>
    )
}