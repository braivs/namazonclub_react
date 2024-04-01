import imgMain from 'src/img/girl/tais2011/main/08.jpg'
import sC from "../../common/styles.module.scss"
import React, {useState} from "react"
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {useGallery} from "../../common/hooks"
import {Table} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/girl/tais2011/main', false)
const images2 = require.context('src/img/girl/tais2011/subgr', false)
const images3 = require.context('src/img/girl/tais2011/mma', false)
const images4 = require.context('src/img/girl/tais2011/karate', false)

export const Tais2011 = () => {
    const [index, setIndex] = useState(-1)
    const [open, setOpen] = useState(false)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    const {
        index: index2,
        setIndex: setIndex2,
        open: open2,
        setOpen: setOpen2,
        photos: photos2,
        slides: slides2
    } = useGallery(images2)

    const {
        index: index3,
        setIndex: setIndex3,
        open: open3,
        setOpen: setOpen3,
        photos: photos3,
        slides: slides3
    } = useGallery(images3)

    const {
        index: index4,
        setIndex: setIndex4,
        open: open4,
        setOpen: setOpen4,
        photos: photos4,
        slides: slides4
    } = useGallery(images4)

    return (
        <>
            <h4>TAIS</h4>
            <img className={sC.videosMainImg} src={imgMain} alt="imgMain"/>
            <p>
                <b>Tais</b> ( 5'7" / 130 lb ) is a many-time winner of the SUBMISSION GRAPPLING championships of
                "NAMAZON" club. She is the best MMA fighter of our club.
            </p>
            <ButtonGallery
                index={index}
                indexCallback={setIndex}
                isOpen={open}
                openCloseCallback={setOpen}
                photos={photos}
                slides={slides}
                buttonName={'TAIS. GALLERY'}
            />
            <ButtonGallery
                index={index2}
                indexCallback={setIndex2}
                isOpen={open2}
                openCloseCallback={setOpen2}
                photos={photos2}
                slides={slides2}
                buttonName={'SUBMISSION GRAPPLING'}
            />
            <ButtonGallery
                index={index3}
                indexCallback={setIndex3}
                isOpen={open3}
                openCloseCallback={setOpen3}
                photos={photos3}
                slides={slides3}
                buttonName={'ММА'}
            />
            <ButtonGallery
                index={index4}
                indexCallback={setIndex4}
                isOpen={open4}
                openCloseCallback={setOpen4}
                photos={photos4}
                slides={slides4}
                buttonName={'KARATE'}
            />
            <h4><u>Results of fights</u></h4>
            <Table bordered>
                <tr>
                    <th>Tais vs. Maria Rylyova</th>
                    <th>Tais vs. Nadezhda Akhmerova</th>
                </tr>
                <tr>
                    <td><NavLink to="/universe/video/1">VIDEO 1. Submission grappling. Tournament. Part 1. June,
                        2010</NavLink></td>
                    <td><NavLink to="/universe/video/1">VIDEO 1. Submission grappling. Tournament. Part 1. June,
                        2010</NavLink></td>
                </tr>
                <tr>
                    <td><NavLink to="/universe/video/2">VIDEO 2. Submission grappling. Tournament. Part 2. June, 2010</NavLink></td>
                    <td><NavLink to="/universe/video/2">VIDEO 2. Submission grappling. Tournament. Part 2. June, 2010</NavLink></td>
                </tr>
                <tr>
                    <td><NavLink to="/universe/video/6">VIDEO 6. Maria Rylyova vs Tais. March, 2011</NavLink></td>
                </tr>
            </Table>
            <Table bordered>
                <tr>
                    <th>Tais vs. Elena Vasilyeva</th>
                    <th>Tais vs. Vlasta</th>
                </tr>
                <tr>
                    <td><NavLink to="/universe/video/8">VIDEO 8. Beach Tournament.Submission Grappling. June, 2011</NavLink></td>
                    <td><NavLink to="/universe/video/8">VIDEO 8. Beach Tournament.Submission Grappling. June, 2011</NavLink></td>
                </tr>
                <tr>
                    <td><NavLink to="/universe/video/16">VIDEO 16. Youth vs Experience. Submission grappling. June, 2011</NavLink></td>
                </tr>
            </Table>
        </>
    )
}