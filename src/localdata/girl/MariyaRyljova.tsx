import imgMain from 'src/img/girl/mariya-ryljova/7.jpg'
import sC from "../../common/styles.module.scss"
import React, {useState} from "react"
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {Table} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/girl/mariya-ryljova/', false)

export const MariyaRyljova = () => {
    const [index, setIndex] = useState(-1)
    const [open, setOpen] = useState(false)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    return (
        <>
            <h4>Maria Rylyova</h4>
            <img className={sC.videosMainImg} src={imgMain} alt="imgMain"/>
            <p>
                <b>Maria Rylyova</b> ( 5'8" / 130 lb ) is a winner of the championship of "Namazon" club in SUBMISSION
                GRAPPLING 2010.<br/>
                Maria - master of sports of the Russion Federation in arm wrestling.
            </p>
            <h4>SUBMISSION GRAPPLING</h4>
            <ButtonGallery
                index={index}
                indexCallback={setIndex}
                isOpen={open}
                openCloseCallback={setOpen}
                photos={photos}
                slides={slides}
                buttonName={'See photos'}
            />
            <h4><u>Results of fights</u></h4>
            <Table bordered>
                <tr>
                    <th>Maria Rylyova vs. Valentina Perfilyeva</th>
                    <th>Maria Rylyova vs. Natalia Mysik</th>
                </tr>
                <tr>
                    <td><NavLink to="/universe/video/12">VIDEO 12. Submission grappling. Tournament. April,
                        2010</NavLink></td>
                    <td><NavLink to="/universe/video/12">VIDEO 12. Submission grappling. Tournament. April,
                        2010</NavLink></td>
                </tr>
            </Table>
            <Table bordered>
                <tr>
                    <th>Maria Rylyova vs. Tais</th>
                    <th>Maria Rylyova vs. Nadezhda Akhmerova</th>
                </tr>
                <tr>
                    <td><NavLink to="/universe/video/1">VIDEO 1. Submission grappling. Tournament. Part 1. June,
                        2010</NavLink></td>
                    <td><NavLink to="/universe/video/1">VIDEO 1. Submission grappling. Tournament. Part 1. June,
                        2010</NavLink></td>
                </tr>
                <tr>
                    <td><NavLink to="/universe/video/2">VIDEO 2. Submission grappling. Tournament. Part 2. June,
                        2010</NavLink></td>
                    <td><NavLink to="/universe/video/2">VIDEO 2. Submission grappling. Tournament. Part 2. June,
                        2010</NavLink></td>
                </tr>
                <tr>
                    <td><NavLink to="/universe/video/6">VIDEO 6. Maria Rylyova vs Tais. March, 2011</NavLink></td>
                </tr>
            </Table>
        </>
    )
}