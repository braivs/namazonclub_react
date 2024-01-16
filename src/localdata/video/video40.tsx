import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {ButtonGallery, MyYouTube} from "../../common/common"
import {NavLink} from "react-router-dom"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"

const images = require.context('src/img/video/40', false)

export const Video40 = () => {
    const videoNumber = 40
    const youtubeID = '_nBXLJXazc0'

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
        <>
            <h3>VIDEO {videoNumber}</h3>
            <h4>Mixed wrestling. Villian vs Tais. Part 2. 2014</h4>
            <p>
                <b>VIDEO 40</b> is the continuation of <NavLink to="/universe/videos/39">VIDEO 39</NavLink>. Here you
                can see six more
                wrestling fights between <b>Villian</b> (180 lb) and <b>Tais</b> (136 lb), which took place in 2014. The
                two competitors knew each other very well, since they have wrestled each other many times over the years
                and their fights have been always aggressive and competitive.
            </p>
            <Row>
                <Col className={cn('d-flex', 'justify-content-center')}>
                    <MyYouTube videoId={youtubeID}/>
                </Col>
            </Row>
            <p>
                It is interesting to note that, although their fights are, in general, evenly matched, Tais still has a
                certain advantage over Villian. She knows well how to efficiently use her legs to handle her opponents,
                while Villian is not a master of that kind of technique and, besides, his legs are easily hurt and more
                vulnerable to submission holds when on the ground.<br/>
                If you are a fan of competitive wrestling between a man and woman, then watch this <b>VIDEO</b>!
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
            <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
        </>
    )
}