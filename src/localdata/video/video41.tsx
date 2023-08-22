import React, {useState} from 'react'
import {Row} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import imgMain from 'src/img/video/main/41main.jpg'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/video/41/kz', false)
const images2 = require.context('src/img/video/41/vz', false)

export const Video41 = () => {
    const videoNumber = 41

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
            <h4>Submission Grappling tournament. Part 1. October, 2014</h4>
            <p>Our HD video featuring the submission grappling mini-tournament that was held in 13 Oct 2014, has been
                divided into two parts : <b>VIDEO 41</b> and <b>VIDEO 42</b>. The first part includes four fights of <b>Zoya
                    Dorofeeva</b> (56 kg / 123.5 lb), who is a newcomer of our competitions.</p>
            <img className={sC.videosMainImg} src={imgMain} alt="imgMain"/>
            <p>Previous to that, Zoya was involved in Russian hand-to-hand fighting. Now, here, her opponents were two
                girls who had competed with each other in the May 2014 Grappling tournament for beginners – <b>Christina
                    Shvets</b> (68.9 kg / 151.9 lb) and <b>Victoria Vardugina</b> (65.3 kg / 144.0 lb). The rules now
                were the same as then – Pins-and-Submissions, which meant that a wrestler, in order to win an individual
                fight, must either to force her opponent to submit or to hold her in a pin for a count of five.
                Zoya proved to be a brave and tough fighter. In spite of being much outweighed by her opponents, she
                fought stubbornly against them, doing her best not to submit.
                Suffice it to say that in the 1st fight of Zoya vs Christina, neither the 4 minutes of the regular time
                nor the 2 extra minutes could create a winner. Only in their 2nd fight, after a hard struggle Zoya found
                herself on her back and Christina earned a pinfall win over her.</p>
            <h5>Christina Shvets vs Zoya Dorofeeva</h5>
            <ButtonGallery
                index={index}
                indexCallback={setIndex}
                isOpen={open}
                openCloseCallback={setOpen}
                photos={photos}
                slides={slides}
            />
            <p>As for Victoria, she appeared to be an even more difficult opponent for Zoya. She defeated her twice in
                their fights, both times with a choke hold. However, Zoya had a few good chances to defeat Vika not only
                in their first fight but also in their second one. Unfortunately for Zoya, due to her inexperience in
                such competitions, she wasn’t able to materialize any of those chances.</p>
            <h5>Victoria Vardugina vs Zoya Dorofeeva</h5>
            <ButtonGallery
                index={index2}
                indexCallback={setIndex2}
                isOpen={open2}
                openCloseCallback={setOpen2}
                photos={photos2}
                slides={slides2}
            />
            <Row>
                <hr/>
                <p>You can buy <b>VIDEO {videoNumber}</b> at <a href="https://gumroad.com/namazonclub"> Gumroad </a></p>
            </Row>
        </>
    )
}