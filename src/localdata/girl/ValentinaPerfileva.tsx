import sC from "../../common/styles.module.scss"
import imgMain from 'src/img/girl/valentina_perfileva/valentina.jpg'
import React from "react"
import {Col, Table} from "react-bootstrap"
import cn from "classnames"
import {useGallery} from "../../common/hooks"
import {DirValentinaKick, DirValentinaSubgr} from "../../common/ImageContexts"
import {ButtonGallery} from "../../common/common"
import {NavLink} from "react-router-dom"

export const ValentinaPerfileva = () => {
    const {
        index: index,
        setIndex: setIndex,
        open: open,
        setOpen: setOpen,
        photos: photos,
        slides: slides,
    } = useGallery(DirValentinaSubgr)
    const {
        index: index2,
        setIndex: setIndex2,
        open: open2,
        setOpen: setOpen2,
        photos: photos2,
        slides: slides2,
    } = useGallery(DirValentinaKick)

    return (
        <>
            <h4>VALENTINA PERFILYEVA</h4>
            <Col className={cn('d-flex', 'justify-content-center')}>
                <img className={sC.videosMainImg} src={imgMain} alt="imgMain"/>
            </Col>
            <p>
                <b>Valentina Perfilyeva</b> ( 5'8" / 132 lb ) - the participant of tournaments of "NAMAZON" club in
                SUBMISSION GRAPPLING,<br/>
                the winner of the Olympic Games of martial arts "EAST-WEST" in karate (kumite).
            </p>
            <ButtonGallery
                index={index}
                indexCallback={setIndex}
                isOpen={open}
                openCloseCallback={setOpen}
                photos={photos}
                slides={slides}
                buttonName={'SUBMISSION GRAPPLING'}
            />
            <ButtonGallery
                index={index2}
                indexCallback={setIndex2}
                isOpen={open2}
                openCloseCallback={setOpen2}
                photos={photos2}
                slides={slides2}
                buttonName={'KICKBOXING'}
            />
            <h4><u>Results of fights</u></h4>
            <Table bordered>
                <tr>
                    <th>Valentina Perfilyeva vs Maria Rylyova</th>
                    <th>Valentina Perfilyeva vs Natalia Mysik</th>
                </tr>
                <tr>
                    <td><NavLink to="/universe/video/12">VIDEO 12. Submission grappling. Tournament. April,
                        2010</NavLink></td>
                    <td><NavLink to="/universe/video/4">VIDEO 4. "Christmas Cup 2011". Tournament on Submission
                        Grappling</NavLink></td>
                </tr>
                <tr>
                    <td></td>
                    <td><NavLink to="/universe/video/12">VIDEO 12. Submission grappling. Tournament. April,
                        2010</NavLink></td>
                </tr>
            </Table>
            <Table bordered>
                <tr>
                    <th>Valentina Perfilyeva vs Ksenia Voloshina</th>
                    <th>Valentina Perfilyeva vs. Nadezhda Akhmerova</th>
                </tr>
                <tr>
                    <td><NavLink to="/universe/video/4">VIDEO 4. "Christmas Cup 2011". Tournament on Submission
                        Grappling</NavLink></td>
                    <td><NavLink to="/universe/video/13">VIDEO 13. Kickboxing. Nadezhda Akhmerova vs Valentina
                        Perfilyeva. 2011</NavLink></td>
                </tr>
            </Table>
        </>
    )
}