import React, {useState} from 'react'
import img1 from 'src/img/competitions/2016/Shrove_Tuesday/armwrestling/1.jpg'
import sC from 'src/common/styles.module.scss'
import {Button} from "react-bootstrap"
import {Collapse} from "@mui/material"
import {getGalleryPhotosFromRequire} from "../../../common/helpers"
import {LightboxMy, PhotoAlbumMy} from "../../../common/ModdedComponents/ModdedComponents"

const images = require.context('src/img/competitions/2016/Shrove_Tuesday/armwrestling/', false)
const images2 = require.context('src/img/competitions/2016/Shrove_Tuesday/wrestling/', false)

export const Maslenitsa2016 = () => {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [index, setIndex] = useState(-1)
    const [index2, setIndex2] = useState(-1)

    const photos = getGalleryPhotosFromRequire(images)
    const slides = photos.map(({src}) => ({src}))

    const photos2 = getGalleryPhotosFromRequire(images2)
    const slides2 = photos.map(({src}) => ({src}))

    return (
        <>
            <h3>2015 - 2016</h3>
            <h4>Female power competitions for the Maslenitsa Festival, 2016</h4>
            <img className={sC.videosMainImg} src={img1} alt=""/>
            <p>The female power competition for this year's Maslenitsa Festival took place at the Namazon Club on
                Thursday, March 10th. It was held in three nominations: armwrestling, leg-wrestling and
                pins-and-submissions wrestling where a wrestler could win a fight by either submission or pin. There
                were three participants in all who competed in the same weight category - up to 60 kg:</p>
            <ul>
                <li>Viktoria Vardugina - a well-known armwrestler who won numerous combative sports competitions at the
                    Namazon Club;
                </li>
                <li>Viktoria Smorodina – an ambitious fighter specializing in Wushu, boxing and powerlifting;</li>
                <li>Oxana Grigorenko – the Namazon Club representer.</li>
            </ul>
            <p>The winner in the "armwrestling" nomination became Viktoria Vardugina who confidently defeated her both
                opponents in both left and right hand fights.</p>
            <Button variant="primary" onClick={() => setOpen(!open)}>Armwrestling photos</Button>
            <Collapse in={open}>
                <PhotoAlbumMy photos={photos} openSetState={setIndex}/>
                <LightboxMy slides={slides} index={index} closeSetState={setIndex}/>
            </Collapse>
            <p>In the leg-wrestling contest, Viktoria Vardugina and Oxana Grigorenko divided 1st and 2nd places.</p>
            <p>The pins-and-submission fights were the most thrilling part of the competition. The three ladies wrestled
                each against each other. The fights were won by holding the opponent in a pin for a count of 7, or
                forcing her
                into submission. The time limit of the fights was 5 minutes from start to end. Oxana Grigorenko was the
                absolute winner of the competition. Viktoria Smorodina who proved to be a fairly even match for Oxana
                won the
                2nd place.</p>
            <Button variant="primary" onClick={() => setOpen2(!open2)}>Wrestling photos</Button>
            <Collapse in={open2}>
                <PhotoAlbumMy photos={photos2} openSetState={setIndex2}/>
                <LightboxMy slides={slides2} index={index2} closeSetState={setIndex2}/>
            </Collapse>
            <p>Anyway it was an interesting sporting event. Even though there were only few participants, it was well
                compensated with their high fitness and wrestling level.</p>
        </>
    )
}