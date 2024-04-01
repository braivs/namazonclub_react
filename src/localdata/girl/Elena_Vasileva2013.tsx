import imgMain from 'src/img/video/29/08.jpg'
import imgMain2 from 'src/img/video/29/04.jpg'
import sC from "../../common/styles.module.scss"
import React, {useState} from "react"
import {NavLink} from "react-router-dom"
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"

import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/video/09/mma-rozhdestvenskij-kubok-2012-1', false)

export const ElenaVasileva2013 = () => {
    const [index, setIndex] = useState(-1)
    const [open, setOpen] = useState(false)
    const photos = getGalleryPhotosFromRequire(images, 330, 220)
    const slides = getSlides(photos)

    return (
        <>
            <h4>Elena Vasilyeva</h4>
            <img className={sC.videosMainImg} src={imgMain} alt="imgMain"/>
            <p>
                <b>Elena Vasilyeva</b> (5'6" / from 132 lb (2012) to 157 lb (2013)) is one of the youngest sportswomen
                who have ever participated in the tournaments and individual fights organized by the Namazon Club. She
                is specialized in MMA and submission grappling (submission-style wrestling). But currently she’s giving
                priority to arm wrestling in which she has achieved great success on the international level.
            </p>
            <h4>
                <u>Elena Vasilyeva in MMA fights</u>
            </h4>
            <p>
                The most memorable one of all Elena’s fights is most likely her MMA fight that was held as part of the
                Christmas Cup Tournament 2012, where she fought against our guest from Moscow
                <NavLink to="/universe/girl/2012_2013/kara-teller"> Kara Teller</NavLink> (5'7" / 119 lb).<br/>
                If not to count multiple sparring MMA matches, her fight with Kara in that tournament was Elena’s debut
                in MMA competitions.<br/>
                The fight consisted of 3 rounds, each lasting 4 minutes with 1 minute of rest between each round. Elena
                was in control of the fight during the first two rounds. There were several moments when she could
                possibly end the fight ahead of time by forcing Kara to submit. But Kara was brave and resilient. She
                fought as though her life would depend on it. Struggling in the bottom position and taking punches in
                her head, she refused to give up, showing incredible will to win.
            </p>
            <ButtonGallery
                index={index}
                indexCallback={setIndex}
                isOpen={open}
                openCloseCallback={setOpen}
                photos={photos}
                slides={slides}
                buttonName={'See photos'}
            />
            <p>
                Minutes later, in the third round, Elena started to grow tired. Her movements slowed down a little and
                her attacks lost their strength. She began to make mistakes and eventually one of those mistakes was
                fatal. After a failed takedown attempt, Elena found herself on her back with Kara on top of her in mount
                position. Then, trying to avoid blows landing on her head, Elena rolled over, turning her back to her
                opponent, which Kara immediately took advantage of and submitted Elena with a choke.
            </p>
            <h4>
                <u>Elena Vasilyeva in Submission Grappling fights</u>
            </h4>
            <p>
                During the period 2012-2013 Elena was out of wrestling. However, one day in June 2013, she returned and
                had a new match with Tais (5'7" / 135 lb), her traditional opponent in the Namazon Club.<br/>
                It was about two years since the girls had last fought each other. You may remember that Tais being more
                experienced has always dominated Elena in their previous individual fights. But since then, Elena has
                improved significantly as an athlete. She has gained weight, and her muscles have become a lot bigger
                and stronger through fitness and weightlifting activities. Anyway, by the time of the arranged fight she
                was 22 lb (10 kg) heavier than Tais.<br/>
                Already in the first round Elena was able to secure a choke hold from bottom position. Tais found
                herself in unexpected trouble and was forced to submit to her younger rival.
            </p>
            <p>
                Especially remarkable was Elena’s win in the third round that lasted a bit more than 30 seconds. There
                was an excellent takedown followed by a successfully applied headscissors that forced Tais to submit.
            </p>
            <img className={sC.videosMainImg} src={imgMain2} alt="imgMain2"/>
            <p>
                It was a pretty long match, by Namazon standards. The entire match lasted about 20 minutes, and in its
                second half the fight leveled out. But… the final victory of Elena Vasilyeva had been already
                predetermined. The total score at the end of the match was 4-2 in her favor (she won 4, lost 2, and tied
                one round).<br/>
                For a long while now, many wrestling fans have been eagerly waiting for a rematch between these two
                rivals, which will supposedly have to prove that Elena’s win over Tais was no fluke. But in any case,
                Elena has already risen to become a new star in Submission Grappling.
            </p>
            <h4><u>Results for MMA fights 2012</u></h4>
            <p>Win-loss-draw record – 0:2:0 (for January 2012).</p>
            <hr/>
            <p>
                The video of the MMA fight of Elena (Video 9), as well as the video of her submission grappling fight
                (Video 29) 2012- 2013, are available for purchasing in our online store on <a
                href="https://gumroad.com/namazonclub">Gumroad</a>.
            </p>
        </>
    )
}