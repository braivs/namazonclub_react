import React, {useState} from 'react'
import img1 from 'src/img/competitions/2016/Shrove_Tuesday/armwrestling/1.jpg'
import sC from 'src/common/styles.module.scss'
import {Button, Collapse} from "react-bootstrap"
import {Gallery} from "react-grid-gallery"
import {photos} from "./photosTemp"

export const Maslenitsa2016 = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <h3>2015 - 2016</h3>
            <h4>Female power competitions for the Maslenitsa Festival, 2016</h4>
            <img className={sC.mainImg} src={img1} alt=""/>
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
            <Button variant="primary" onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>Armwrestling photos</Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <Gallery images={photos} />
                </div>
            </Collapse>


        </>
    )
}