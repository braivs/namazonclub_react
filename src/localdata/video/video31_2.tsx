import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/video/main/31_2main.jpg'
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/video/31_2', false)

export const Video31_2 = () => {
    const videoNumber = '31_2'

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Mixed Wrestling - the Best Fights. Part 5.2. 2013</h4>
            <p>
                This is the second part of the fifth video of the series titled <b>«Mixed wrestling - the best
                fights»</b>. It includes four fights between <b>Tais</b> (5'7" / 135 lb) and <b>Villian</b> (5'8" / 177
                lb). Read the description of the Part 5.1.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>
                Our mixed wrestling contests are always purely competitive (not semi-competitive!) and in the most of
                them you can see high standard wrestling performance. Besides, we have no men or women on the mat –
                there are fighters only.
            </p>
            <p>To find out the final result of our fights on that day (who scored the most submissions in the match and
                became a winner), just watch the video.</p>
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