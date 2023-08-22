import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/video/main/09main.jpg'
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/video/09/mma-rozhdestvenskij-kubok-2012-1', false)
const images2 = require.context('src/img/video/09/mma-rozhdestvenskij-kubok-2012-3', false)
const images3 = require.context('src/img/video/09/mma-rozhdestvenskij-kubok-2012-4', false)

export const Video09 = () => {
    const videoNumber = 9

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
            <h4>MMA tournament "Christmas Cup 2012"</h4>
            <p>
                In this tournament participated three fighters: <b>Elena Vasilyeva</b> (St. Petersburg, 5’6” / 132
                lb), <b>Kara Teller</b>, Namazon Club’s newcomer (Moscow, 5’7” / 119 lb), Tais (St. Petersburg, 5’7” /
                130 lb). The tournament was held in one round. So eventually, the girls had to have two fights each.
                Each fight consisted of three 4 minute rounds with 1 minute rest between each round.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>The girls fought hard and uncompromisingly in all the three fights.</p>
            <p>If you like competitive fights where there are strikes with arms and legs as well as wrestling with
                armlocks and chokes, then you will have to love our film.</p>
            <h5><u>First fight</u>  Elena Vasilyeva vs Kara Teller</h5>
            <ButtonGallery
                index={index}
                indexCallback={setIndex}
                isOpen={open}
                openCloseCallback={setOpen}
                photos={photos}
                slides={slides}
            />
            <h5><u>Second fight</u> Kara Teller vs Tais</h5>
            <ButtonGallery
                index={index2}
                indexCallback={setIndex2}
                isOpen={open2}
                openCloseCallback={setOpen2}
                photos={photos2}
                slides={slides2}
            />
            <h5><u>Second fight</u> Elena Vasilyeva vs Tais</h5>
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