import React, {useState} from 'react'
import sC from 'src/common/styles.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import mainImg from 'src/img/video/main/19main.jpg'
import mainImg2 from 'src/img/video/main/19main2.jpg'
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/video/19', false)

export const Video19 = () => {
    const videoNumber = 19

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Varvara Akulova vs Tais. Submission Grappling. May, 2012</h4>
            <p>
                <b>Varvara Akulova</b> is a great athlete. As a child and teenager she was several times recognized as
                the strongest girl on the planet, which was twice confirmed by the Guinness Book of World Records.
                Varvara's strength results in the various periods of her life have been presented, for example, on the
                official website of the <a href="http://www.spb-ac.ru/var.htm">St. Petersburg Athletic Center</a>. Look
                also <a href="http://warnet.ws/news/16167">here</a>.
            </p>
            <p>
                <a href="http://fakty.ua/130242-menya-osuzhdali-mol-doch-vyrastet-mutantom-da-u-varvary-do-500-predlozhenij-braka-v-internete-ezhemesyachno">Today</a>,
                Akulova is an acting sportswoman, master of sports in weightlifting and in powerlifting. Her
                height/weight are 175 cm (5'9'') / 75 kg (165 lb).
                <b>Tais</b> (5'7" / 130 lb) is the leader of the Namazon Club. She specializes in wrestling and MMA.
            </p>
            <img className={sC.videosMainImg} src={mainImg} alt="imgMain"/>
            <p>In this fight Varvara has a significant advantage in weight (about 33 lb) and in strength, but Tais is
                more experienced and technically skilled. The fight is fought in the grappling style. The intrigue of it
                is that nobody knows in advance who would win in the end. The principal question is <b>WHICH will be
                    better, the skill or pure strength</b>.</p>
            <img className={sC.videosMainImg} src={mainImg2} alt="imgMain2"/>
            <p>It is really a hard fight! Clearly a big, strong Varvara does not want to lose to her smaller opponent.
                In turn, Tais would like nothing better than to beat the bigger and stronger athlete to demonstrate her
                skill and competitiveness. Who will prevail?</p>
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

//todo: warnet link not working, maybe fix or delete