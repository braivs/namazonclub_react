import {MainVideoImg} from "../../common/MainVideoImg"
import imgMain from "../../img/girl/natalia-mysik/natalia.jpg"
import React from "react"
import {useGallery} from "../../common/hooks"
import {DirElenaVasilevaMma, DirNataliaMysikSubgr} from "../../common/ImageContexts"
import {CustomButtonGallery} from "../../common/common"
import {Table} from "react-bootstrap"
import {NavLink} from "react-router-dom"

export const NataliaMysik = () => {
    const gallery1 = useGallery(DirNataliaMysikSubgr)

    return (
        <>
            <h4>NATALIA MYSIK</h4>
            <MainVideoImg imgMain={imgMain}/>
            <p><b>Natalia Mysik</b> ( 5'11" / 154 lb ) - the participant of club's tournaments on SUBMISSION
                GRAPPLING.<br/>
                She is a winner of the tournament on submission grappling "Christmas Cup 2011".</p>
            <CustomButtonGallery gallery={gallery1} buttonName="SUBMISSION GRAPPLING"/>
            <h4><u>Results of fights</u></h4>
            <Table bordered>
                <tr>
                    <th>Natalia Mysik vs Maria Rylyova</th>
                    <th>Natalia Mysik vs Valentina Perfilyeva</th>
                </tr>
                <tr>
                    <td><NavLink to="/universe/video/12">VIDEO 12. Submission grappling. Tournament. April, 2010</NavLink></td>
                    <td><NavLink to="/universe/video/4">VIDEO 4. "Christmas Cup 2011". Tournament on Submission Grappling</NavLink></td>
                </tr>
                <tr>
                    <td></td>
                    <td><NavLink to="/universe/video/12">VIDEO 12. Submission grappling. Tournament. April, 2010</NavLink></td>
                </tr>
            </Table>
            <Table bordered>
                <tr>
                    <th>Natalia Mysik vs Ksenia Voloshina</th>
                </tr>
                <tr>
                    <td><NavLink to="/universe/video/4">VIDEO 4. "Christmas Cup 2011". Tournament on Submission Grappling</NavLink></td>
                </tr>
            </Table>
        </>
    )
}