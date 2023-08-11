import React, {useState} from 'react'
import {Button, Col, Row} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import cn from 'classnames'
import imgMain from 'src/img/videos/42main.jpg'
import {getGalleryPhotosFromRequire} from "../../common/helpers"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"

const images = require.context('src/img/videos/42/', false)

export const Video42 = () => {
    const [index, setIndex] = useState(-1)

    const [open, setOpen] = useState(false)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = photos.map(({src}) => ({
        src
    }))

    return (
        <>
            <h3>VIDEO 42</h3>
            <h4>Submission Grappling tournament. Part 2. October, 2014</h4>
            <p><b>VIDEO 42</b> is the second part of our HD video featuring the submission grappling mini- tournament
                that took place on 13/10/2014. It includes two fights between <b>Christina Shvets</b> (68.9 kg / 151.9
                lb) and <b>Victoria Vardugina</b> (65.3 kg / 144.0 lb) who, after having defeated Zoya Dorofeeva
                (see <b>VIDEO 41</b>), decided between them who would be the winner of this small wrestling event.
            </p>
            <Col className={cn('d-flex', 'justify-content-center')}>
                <img className={sC.videosMainImg} src={imgMain} alt="imgMain"/>
            </Col>
            <p>This was the second time these rivals wrestled each other. The first one was at the
                <b>!!!add link!!</b> tournament that was held for beginners on May
                9th this year, where Victoria came out a winner. And here they were again on the same mat, Christina
                in a determined mood for the rematch!</p>
            <p>
                According to the rules, in order to win an individual fight, it was necessary for both opponents either
                to get the other to submit or pin her for a count of 5.<br/>
                By this time, they were about equally matched in weight and strength. Their fight started with the two
                of them studying and feeling out each other for a long while, each being cautious and avoiding
                takedowns. But then the pace increased, and as soon as the fight moved to the ground, Christina found
                herself in a dangerous position: Victoria put her in a headlock and made a nice pin attempt which
                Christina was barely able to escape! It was an exciting moment, but it produced no winner or loser. Thus
                the regular time ended in a draw, so, after a short rest break, the fight continued for 2 extra minutes,
                but again neither of the wrestlers seemed to be capable of submitting or pinning the opponent.
            </p>
            <p>
                Then the 2nd fight began. And it was fought in the same manner as the 1st. After the regular time there
                was a draw. Nevertheless, we wanted to follow our own rules and determine a final winner anyway, so we
                decided to extend the extra time from 2 to 10 minutes. Consequently, the rest of the fight became a sort
                of endurance test. The longer the struggle went on, the more difficult it was getting for Christina to
                control the match. She seemed pretty worn out in the end, while the same couldn’t be said for Victoria.
            </p>
            <Button variant="primary" onClick={() => setOpen(!open)}>SCREENSHOTS</Button>
            <Collapse in={open}>
                <PhotoAlbumMy photos={photos} openSetState={setIndex}/>
            </Collapse>
            <LightboxMy slides={slides} index={index} closeSetState={setIndex}/>
            <Row>
                <hr/>
                <p>You can buy <b>VIDEO 42</b> at <a href="https://gumroad.com/namazonclub"> Gumroad </a></p>
            </Row>
        </>
    )
}

// todo: add link