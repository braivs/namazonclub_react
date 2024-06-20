import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useExtractVideoID} from "../../common/hooks"

const images = require.context('src/img/video/01', false)

export const NC01 = () => {
    const videoNumber = useExtractVideoID()
    const youtubeID = 'G7RTYfRO4B4'

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)
    return (
        <>
            <h3>{videoNumber}</h3>
            <h4>Submission Grappling. Tournament. Part 1. June, 2010</h4>
            <p>
                In this tournament participated three fighters: <b>Tais</b> (5'7" / 128 lb), <b>Maria Rylyova</b> (5'7"
                / 126 lb) and <b>Nadezhda Akhmerova</b> (5'6" / 128 lb). Tais has already won such competitions several
                times. Maria has lately improved her skill level significantly, and you could expect that she would have
                a chance to become a winner. Nadezhda is specialized in Kickboxing and ММА. This was her first
                Submission Grappling tournament.
            </p>
            <p>The tournament was held in two rounds. As it was expected, the main struggle in the first round was
                between Tais and Maria. The two girls showed very tough and uncompromising wrestling. This video
                features all the three matches of the first round.</p>
            <Row>
                <Col className={cn('d-flex', 'justify-content-center')}>
                    <MyYouTube videoId={youtubeID}/>
                </Col>
            </Row>
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

//todo: change main image to multiple, because many fights inside. And look for same in another videos.