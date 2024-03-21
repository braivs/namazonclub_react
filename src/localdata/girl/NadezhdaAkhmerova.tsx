import imgMain from 'src/img/girl/nadezhda_akhmerova/nadezhda.jpg'
import {MainImg} from "../../common/MainImg"
import React from "react"
import {useGallery} from "../../common/hooks"
import {DirNadezhdaAkhmerovaKick, DirNadezhdaAkhmerovaSubgr} from "../../common/ImageContexts"
import {CustomButtonGallery} from "../../common/common"
import {NavLink} from "react-router-dom"
import {Table} from "react-bootstrap"

export const NadezhdaAkhmerova = () => {
    const gallery1 = useGallery(DirNadezhdaAkhmerovaSubgr)
    const gallery2 = useGallery(DirNadezhdaAkhmerovaKick)


    return (
        <>
            <h4>NADEZHDA AKHMEROVA</h4>
            <MainImg imgMain={imgMain}/>
            <p>
                <b>Nadezhda Akhmerova</b> ( 5'6" / 132 lb ) - the participant of club's tournaments on SUBMISSION
                GRAPPLING.<br/>
                She can participate in competitions on kickboxing and MMA also.
            </p>
            <CustomButtonGallery gallery={gallery1} buttonName="SUBMISSION GRAPPLING"/>
            <CustomButtonGallery gallery={gallery2} buttonName="KICKBOXING"/>
            <h4><u>Results of fights</u></h4>
            <Table bordered>
                <tr>
                    <th>Nadezhda Akhmerova vs. Maria Rylyova</th>
                    <th>Nadezhda Akhmerova vs. Tais</th>
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
            </Table>
            <Table bordered>
                <tr>
                    <th>Nadezhda Akhmerova vs. Valentina Perfilyeva</th>
                </tr>
                <tr>
                    <td><NavLink to="/universe/video/13">VIDEO 13. Kickboxing. Nadezhda Akhmerova vs Valentina
                        Perfilyeva. 2011</NavLink></td>
                </tr>
            </Table>
        </>
    )
}