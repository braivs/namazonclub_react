import imgMain from "../../img/girl/kseniya-voloshina/kseniya.jpg"
import {MainImg} from "../../common/MainImg"
import React from "react"
import {useGallery} from "../../common/hooks"
import {DirKseniyaVoloshinaSubgr} from "../../common/ImageContexts"
import {CustomButtonGallery} from "../../common/common"
import {NavLink} from "react-router-dom"
import {Table} from "react-bootstrap"

export const KseniyaVoloshina = () => {
    const gallery1 = useGallery(DirKseniyaVoloshinaSubgr)

    return (
        <>
            <h4>KSENIA VOLOSHINA</h4>
            <MainImg imgMain={imgMain}/>
            <p>
                <b>Ksenia Voloshina</b> ( 5'3" / 141 lb ) - the participant of club's tournaments on SUBMISSION
                GRAPPLING.<br/>
                She is a prize-winner of the tournament on submission grappling "Christmas Cup 2011".
            </p>
            <CustomButtonGallery gallery={gallery1} buttonName="SUBMISSION GRAPPLING"/>
            <h4><u>Results of fights</u></h4>
            <Table bordered>
                <tr>
                    <th>Ksenia Voloshina vs. Natalia Mysik</th>
                    <th>Ksenia Voloshina vs. Valentina Perfilyeva</th>
                </tr>
                <tr>
                    <td><NavLink to="/universe/video/4">VIDEO 4. "Christmas Cup 2011". Tournament on Submission Grappling</NavLink></td>
                    <td><NavLink to="/universe/video/4">VIDEO 4. "Christmas Cup 2011". Tournament on Submission Grappling</NavLink></td>
                </tr>
            </Table>
        </>
    )
}