import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/video/main/27main.jpg'
import {ButtonGallery} from "../../common/common"


const images = require.context('src/img/video/27', false)

export const Video27 = () => {
    const videoNumber = 27
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Female Beach Wrestling. Part 2. June, 2011</h4>
            <p>
                This is a continuation of the multi-round sand-wrestling contest between <b>Tais</b> (5'7" / 130 lb)
                and <b>Elena Vasilyeva</b> (5'6" / 135 lb). The first nine rounds of this exciting match were featured
                in our Video 26 (scroll the page down a little to see the initial description). Here in the Part 2 you
                can see eight more rounds fought with the same rules as those in the Part 1.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>Although both women are very ambitious, they are not quite equal in experience and skill. One of them is
                still using some nice wrestling combinations, applying good choking and submission holds, while the
                other is just struggling heavily, showing her fighting spirit and refusing to give up.</p>
            <p>If you like strong, skilled and athletic women in real wrestling, then we recommend you to purchase this
                video.</p>
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