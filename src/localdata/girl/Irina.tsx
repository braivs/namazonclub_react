import imgMain from 'src/img/girl/irina/irina.jpg'
import sC from "../../common/styles.module.scss"
import React from "react"
import {useGallery} from "../../common/hooks"
import {ButtonGallery} from "../../common/common"
import {DirIrinaBeachgr, DirIrinaSubgr} from "../../common/ImageContexts"
import {Col} from "react-bootstrap"
import cn from "classnames"

export const Irina = () => {
    const {
        index: index,
        setIndex: setIndex,
        open: open,
        setOpen: setOpen,
        photos: photos,
        slides: slides,
    } = useGallery(DirIrinaSubgr, {width: 320, height: 245})

    const {
        index: index2,
        setIndex: setIndex2,
        open: open2,
        setOpen: setOpen2,
        photos: photos2,
        slides: slides2
    } = useGallery(DirIrinaBeachgr, {width: 330, height: 220})

    const buttonName = 'See photos'

    return (
        <>
            <h4>IRINA</h4>
            <Col className={cn('d-flex', 'justify-content-center')}>
                <img className={sC.videosMainImg} src={imgMain} alt="imgMain"/>
            </Col>
            <p>
                <b>IRINA</b> ( 5'9" / 154 lb ) - one of the strongest participants of tournaments, the championships and
                separate fights on <b>SUBMISSION GRAPPLING</b>, organized by club "Namazon". Spending each fight
                vigorously and uncompromisingly, Irina could make a competition to any opponent.
            </p>
            <p>
                As an example photos of episodes of one of last fights Irina against <b>Tais</b> and <b>Izida</b> (known
                Ukrainian bodybuilder and mixed wrestler) are shown.
            </p>
            <h4>SUBMISSION GRAPPLING</h4>
            <p><b>Irina</b> vs. <b>Izida</b></p>
            <ButtonGallery
                index={index}
                indexCallback={setIndex}
                isOpen={open}
                openCloseCallback={setOpen}
                photos={photos}
                slides={slides}
                buttonName={buttonName}
            />
            <h4>BEACH GRAPPLING</h4>
            <p><b>Irina</b> vs. <b>Tais</b></p>
            <ButtonGallery
                index={index2}
                indexCallback={setIndex2}
                isOpen={open2}
                openCloseCallback={setOpen2}
                photos={photos2}
                slides={slides2}
                buttonName={buttonName}
            />
        </>
    )
}