import imgMain from 'src/img/girl/irina_vlasta/vlasta.jpg'
import {MainImg} from "../../common/MainImg"
import {useGallery} from "../../common/hooks"
import {DirVlastaBeachgr, DirVlastaSubgr} from "../../common/ImageContexts"
import {CustomButtonGallery} from "../../common/common"
import React from "react"
import {Table} from "react-bootstrap"
import {NavLink} from "react-router-dom"

export const IrinaVlasta = () => {
    const gallery1 = useGallery(DirVlastaBeachgr)
    const gallery2 = useGallery(DirVlastaSubgr)

    return (
        <>
            <h4>IRINA (VLASTA)</h4>
            <MainImg imgMain={imgMain}/>
            <p>
                <b>Irina (Vlasta)</b> ( 5'9" / 154 lb ) - the participant of club's tournaments on SUBMISSION GRAPPLING.<br/>
                She engaged in muay thai and polе dance.
            </p>
            <CustomButtonGallery gallery={gallery1} buttonName="SUBMISSION GRAPPLING" />
            <CustomButtonGallery gallery={gallery2} buttonName="BEACH WRESTLING" />
            <h4><u>Results of fights</u></h4>
            <Table bordered>
                 <tr>
                     <th>Vlasta (Irina) vs. Tais</th>
                     <th>Vlasta (Irina) vs. Elena Vasilyeva</th>
                 </tr>
                <tr>
                    <td><NavLink to="/universe/video/8">VIDEO 8. Beach Tournament.Submission Grappling. June, 2011</NavLink></td>
                    <td><NavLink to="/universe/video/8">VIDEO 8. Beach Tournament.Submission Grappling. June, 2011</NavLink></td>
                </tr>
            </Table>
        </>
    )
}