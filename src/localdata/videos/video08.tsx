import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/videos/main/08main.jpg'
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/videos/08/1', false)
const images2 = require.context('src/img/videos/08/plyazhnyj-turnir-2011-2', false)
const images3 = require.context('src/img/videos/08/plyazhnyj-turnir-2011-3', false)

export const Video08 = () => {
    const videoNumber = 8

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    const [open2, setOpen2] = useState(false)
    const [index2, setIndex2] = useState(-1)
    const photos2 = getGalleryPhotosFromRequire(images2)
    const slides2 = getSlides(photos2)

    const [open3, setOpen3] = useState(false)
    const [index3, setIndex3] = useState(-1)
    const photos3 = getGalleryPhotosFromRequire(images3)
    const slides3 = getSlides(photos3)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Beach Tournament. Submission Grappling. June, 2011</h4>
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
            <p>If you like female wrestling not only indoors, but under the open sky as well, this film will suit you.</p>
            <h5>Elena Vasilyeva  vs  Tais</h5>
            <ButtonGallery
                index={index}
                indexCallback={setIndex}
                isOpen={open}
                openCloseCallback={setOpen}
                photos={photos}
                slides={slides}
            />
            <h5>Irina (Vlasta)  vs  Tais</h5>
            <ButtonGallery
                index={index2}
                indexCallback={setIndex2}
                isOpen={open2}
                openCloseCallback={setOpen2}
                photos={photos2}
                slides={slides2}
            />
            <h5>Elena Vasilyeva  vs  Irina (Vlasta)</h5>
            <ButtonGallery
                index={index3}
                indexCallback={setIndex3}
                isOpen={open3}
                openCloseCallback={setOpen3}
                photos={photos3}
                slides={slides3}
            />
            <hr/>
            <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
        </>
    )
}